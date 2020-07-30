const request = require("request");
const db = require("./db");
const fs = require("fs");

//检测ip
const check = function (proxy, headers = {}) {
  return new Promise((resolve) => {
    const processResult = (err, response, body) => {
      if (!err && response.statusCode == 200) {
        console.log(proxy.ip + " 链接成功：");
        fs.appendFile(
          "./ips",
          JSON.stringify(proxy) + "\n",
          (err) => err && console.log(err + "1111111")
        );
      } else {
        console.log(proxy.ip + " 链接失败");
        //   removeIp(proxy.ip);
      }
      resolve();
    };
    const options = {
      url: "https://www.liuli.se/wp/anime.html",
      proxy: `${proxy.type.toLowerCase()}://${proxy.ip}:${proxy.port}`,
      method: "GET",
      timeout: 3000,
      headers,
    };
    request(options, processResult);
  });
};

const checkAll = async (proxys) => {
  let len = proxys.length, start = 0, end = 10;
  const size = 10;
  const createChecks = (start, end) => {
    return proxys.slice(start, end).map(check);
  };

  while(start < end) {
    const checks = createChecks(start, end);
    await Promise.all(checks);
    if(len - end >= size) {
      start += size;
      end += size;
    } else {
      start += size;
      end = len;
    }
  }
};

db("ip_pool")
  .select("ip_address", "port", "https")
  .then((rows) =>
    rows.map(({ ip_address, port, https }) => ({
      ip: ip_address,
      port,
      type: https.trim() === "支持" ? "https" : "http",
    }))
  )
  .then(checkAll)
  .catch(console.error)
