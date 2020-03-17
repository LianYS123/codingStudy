const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');  //签发
const jwtAuth = require('koa-jwt'); //校验
// const koaStatic = require('koa-static');

let app = new Koa();
let router = new Router();
const secret = 'this is a secrect';
router.get('/api/login', async ctx => {
    let { username, password } = ctx.query;
    if (username === 'lian' && password === '123') {
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 1000,
            data: { username: 'lian' }
        },secret)
        ctx.body = { ok: 1, token }
    } else {
        ctx.status = 401;
        ctx.body = { ok: 0, message: '用户名或密码错误' };
    }
})
router.get('/api/detail', jwtAuth({ secret: 'this is a secrect' }), async ctx => {
    ctx.body = 'Detail page protected';
})
app.use(router.routes());
// app.use(koaStatic())

app.listen(3000);