const db = require("./db");

const datas = require('./datas');
const data = {
    ip_address: "205.185.127.8",
    port: "8080",
    address: "美国 内华达州 拉斯维加斯 ",
    operator: "buyvm.net",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "2.27秒",
  };
(async () => {
  const res = await db("ip_pool").insert(datas);
  console.log("insert success!!! " + res);
  const newData = await db("ip_pool").select('id');
  console.log(newData);
})();
