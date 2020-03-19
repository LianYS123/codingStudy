const Koa = require('koa');

// const koaStatic = require('koa-static');

let app = new Koa();
app.keys = ['just a key','another key'];
app.use(require('./api'));

app.listen(8080);