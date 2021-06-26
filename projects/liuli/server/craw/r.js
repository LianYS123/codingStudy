const { notice } = require("./tools");
const { load } = require("cheerio");
const { addMethod } = require("./fetchUtils/createPoolProxy")();
const _fetch = require("./fetchUtils/createProxyFetch")(
  "http://localhost:10809"
);
const db = require("./knex");
const fetch = addMethod(_fetch);
const createLinks = (num) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(
      `https://www.r18.com/common/search/floor=movies/service=video/page=${i}/?lg=zh`
    );
  }
  return res;
};
const links = createLinks(1667);
const parse = ($, link) => {
  $(
    "#contents > div.main > section > ul.cmn-list-product01.type01.clearfix.pt20.cmn-sec-imgHover01 > li"
  ).each(async function () {
    const src1 = $(this).find("div > p > a").attr("data-video-high");
    const src2 = $(this).find("div > p > a").attr("data-video-med");
    const src3 = $(this).find("div > p > a").attr("data-video-low");
    const src4 = $(this).find("div > p > a").attr("data-vr-url");
    let title = $(this).find("a > dl > dt").text();
    title = title ? title.replace(/\s+/g, "") : "没标题";
    const imgSrc = $(this).find("a > p > img").attr("data-original");
    let src = src1 || src2 || src3 || src4;
    const data = {
      img_src: imgSrc,
      video_src: src,
      title,
      source_link: link,
    };
    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        delete data[key];
      }
    });
    const { id, err } = await db("r")
      .select("id")
      .where(data)
      .then((res) => (res && res.length ? res[0] : {}))
      .catch((err) => {
        notice("./crawler_err.log", err.message);
        return { err };
      });
    if (err) {
      console.log(err.message);
      return;
    }
    if (!id) {
      db("r")
        .insert(data)
        .then((res) => {
          console.log("insert -> " + res[0] + title);
        })
        .catch((err) => notice("./crawler_err.log", err.message));
    } else {
      db("r")
        .where({ id })
        .update(data)
        .then((res) => {
          console.log("update -> " + res[0] + title);
        })
        .catch((err) => notice("./crawler_err.log", err.message));
    }
  });
};
links.forEach((link) =>
  fetch(link)
    .then((res) => res.text())
    .then((res) => {
      const $ = load(res);
      parse($, link);
    })
    .catch((err) => notice("./crawler_err.log", err.message))
);
