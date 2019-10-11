const static = require('koa-static')

module.exports = (router,option) => {

  let options = {
    js: option.js || 1 * 86400 * 1000,
    image: option.image || 30 * 86400 * 1000,
    html: option.html || 30 * 86400 * 1000,
    css: option.css || 7 * 86400 * 1000,
    other: option.other || 7 * 86400 * 1000
  }
  router.all(/(\.js|\.jsx)$/i,static('./static/',{
    maxage: options.js,
  }))
  router.all(/(\.jpg|\.png|\.gif)$/i,static('./static/',{
    maxage: options.image,
  }))
  router.all(/(\.html|\.htm)$/i,static('./static/',{
    maxage: options.html,
  }))
  router.all(/\.css$/i,static('./static/',{
    maxage: options.css,
  }))
  router.all('*',static('./static/', {
    maxage: options.other,
  }))
}
