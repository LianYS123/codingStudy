const Agent = require("https-proxy-agent");
const Agent2 = require("http-proxy-agent");
const fetch = require("node-fetch");
const link1 = 'http://www.google.com';
const link2 = 'http://lys.buctsnc.cn';
fetch(link2, {
  agent: new Agent("http://localhost:10808"),
})
  .then((res) => {
    console.log("test");
    return res.text();
  })
  .then()
  .catch(console.error);
