const db = require("./db");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const links = [
  "https://ip.ihuan.me/address/576O5Zu9.html?",
  "https://ip.ihuan.me/address/6aaZ5riv.html?",
];

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

let set = new Set();

const request = (link) =>
  fetch(link, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-US;q=0.6",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrer: "https://ip.ihuan.me/address/576O5Zu9.html?page=904545743",
    referrerPolicy: "no-referrer-when-downgrade",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  })
    .then((res) => res.text())
    //   .then(console.log)
    .then((res) => cheerio.load(res))
    .then(($) => {
      const arr = [
        "ip_address",
        "port",
        "address",
        "operator",
        "https",
        "post",
        "anonymous",
        "speed",
      ];
      const datas = [];
      $("div.col-md-10 > div.table-responsive > table > tbody > tr").each(
        function () {
          const data = {};
          $(this)
            .find("td")
            .each(function (index, element) {
              if (index < arr.length) {
                data[arr[index]] = $(this).text();
              }
            });
          datas.push(data);
        }
      );

      if (datas.length) {
        //存库
        datas.forEach((item) => (item.speed = parseFloat(item.speed)))
        const res = datas.filter(({ ip_address }) => {
          if (!set.has(ip_address)) {
            set.add(ip_address);
            return true;
          }
          return false;
        });
        db("ip_pool").insert(res).then(() => console.log('insert success --- ' + res.length + ' datas')).catch(console.error);

        //log
        console.log(JSON.stringify(res, null, 2));
        console.log("-".repeat(100));
        let next = $("div.col-md-10 > nav > ul > li:nth-child(8) > a").attr(
          "href"
        );
        console.log("next -> " + next);
        next = next.startsWith("?")
          ? link.substring(0, link.indexOf("?")) + next
          : next;
        console.log("fetching " + next);

        return delay(500).then(() => request(next));
      } else {
        return;
      }
    })
    .then(() => console.log("over"))
    .catch(({ message }) => console.log(message));

db("ip_pool").select("ip_address")
  .then((arr) => arr.map(({ ip_address }) => ip_address))
  .then((arr) => {
    set = new Set(arr);
    request(links[0]);
  })
  .catch(({ message }) => console.log(message));
