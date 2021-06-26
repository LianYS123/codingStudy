const { notice, fetchFile, getUids } = require("./tools");
const db = require("./db");
const moment = require("moment");
const { load } = require("cheerio");
// const fetch = require("./xFetch");
const fetch = require("./fetchUtils/createProxyFetch")(
  "http://localhost:10809"
);
const xFetch = require("./fetchUtils/createPoolProxy")(20).addMethod(fetch);

const parseDetail = ($, listData, uri) => {
  console.log(`fetching ${uri}`);
  let title = $(".entry-title").text();
  let rating_count = $(".post-ratings strong")
    .eq(0)
    .text()
    .trim()
    .replace(",", "");
  let rating_score = $(".post-ratings strong").eq(1).text().trim();
  let uids = getUids($(".entry-content").text());
  let data = {
    title,
    rating_count: parseInt(rating_count) || 0,
    rating_score: parseFloat(rating_score) || 0,
    uid: uids.join("|"),
    ...listData,
  };
  let logerr = (err) => {
    console.error(err);
    notice("./crawler_err.log", err + " : " + uri);
  };
  db.select("article", ["id"], `href=${db.valueFilter(data.href)}`)
    .then((rows) => {
      if (rows.length === 0) {
        db.insert("article", data).catch(logerr);
        console.log(JSON.stringify(data));
      }
      // else {
      //     db.update('article', data, `id=${rows[0].id}`).catch(logerr)
      // }
    })
    .catch(logerr);
};
const parseList = ($) => {
  let hrefs = [];
  $("article.post").each(function (i, el) {
    let time = $(el).find(".entry-header time").attr("datetime");
    time = +moment(time) || new Date(time).getTime();
    let href = $(el).find(".entry-title a").attr("href");
    let img_src = $(el).find(".entry-content img").attr("src");
    let content = $(el).find(".entry-content").text();
    let tags = [];
    $(el)
      .find(".tag-links a[rel=tag]")
      .each(function () {
        let tag = $(this).text();
        tags.push(tag);
      });
    let data = {
      time,
      href,
      img_src,
      tags: tags.join("|"),
      content,
    };
    hrefs.push({ uri: href, data });
  });
  return hrefs;
};
const fetchLinks = (links) => {
  links.forEach((link) =>
    xFetch(link)
      .then((res) => res.text())
      .then((text) => load(text))
      .then(parseList)
      .then((hrefs) => {
        hrefs.forEach(({ uri, data }) => {
          xFetch(uri)
            .then((res) => res.text())
            .then((text) => load(text))
            .then(($) => parseDetail($, data, uri));
        });
      })
      .catch(console.log)
  );
};

//抓取从start到end页的数据
function createLinks(start, end) {
  let links = [];
  for (let i = start; i <= end; i++) {
    links.push(`https://llss.pl/wp/category/all/anime/page/${i}`);
  }
  return links;
}

let arg = process.argv.slice(2);
let links = [];
if (arg.length === 0) {
  links = createLinks(1, 90);
} else if (arg.length === 1) {
  links = createLinks(1, parseInt(arg[0]));
} else {
  links = createLinks(parseInt(arg[0]), parseInt(arg[1]));
}
fetchLinks(links);
