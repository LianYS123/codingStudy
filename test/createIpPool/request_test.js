const request = require('request');
const fs = require('fs');
const { load } = require('cheerio');

const printTitle = (body) => {
    const $ = load(body.toString());
    console.log($('title').text());
}

const check = function (proxy, headers = {}) {
    return new Promise((resolve, reject) => {
      request(
        {
          url: "https://www.liuli.se/wp/anime.html",
          proxy: `${proxy.type.toLowerCase()}://${proxy.ip}:${proxy.port}`,
          method: "GET",
          timeout: 3000,
          headers,
        },
        function (err, response, body) {
          if (!err && response.statusCode == 200) {
            const createSplite = str => console.log('-'.repeat(50) + ` ${str} ` + '-'.repeat(50));
            createSplite(proxy.ip + " 链接成功：")
            createSplite('START');
            printTitle(body)
            createSplite('END')
            resolve();
          } else {
            console.log(proxy.ip + " 链接失败");
            resolve();
          }
        }
      );
    });
  };

const proxys = fs.readFileSync('./ips').toString().split('\n').filter(item => !!item).map(item => JSON.parse(item))

proxys.forEach(check);
