const HttpsProxyAgent = require("https-proxy-agent");
const fetch = require("node-fetch");
const agent = new HttpsProxyAgent("http://localhost:10809");
const xFetch = (url, options) => {
  return fetch(url, {
    ...options,
    agent,
  })
};
module.exports = xFetch;