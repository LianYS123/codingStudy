const Router = require('koa-router');
const jwt = require('jsonwebtoken');  //签发
const jwtAuth = require('koa-jwt'); //校验
const secret = 'this is a secrect';
let router = new Router({
    prefix: '/api'
});

router.get('/goods/:id', async ctx => {
    let id = ctx.params.id || 0;
    id = parseInt(id);
    ctx.body = {
        ok: 1,
        goods: [
            { id: 1, name: '香蕉', price: 100 * id },
            { id: 2, name: '菠萝', price: 200 * id }
        ]
    }
});
router.post('/login', async ctx => {
    let { username, password } = ctx.request.fields;
    console.log(username, password);
    if (username === 'lian' && password === '123') {
        let token = jwt.sign({
            exp: +new Date() + 1000,
            data: { username }
        }, secret)
        ctx.cookies.set('token',token);
        ctx.body = { ok: 1, token }
    } else {
        ctx.status = 401;
        ctx.body = { ok: 0, message: '用户名或密码错误' };
    }
})
router.get('/admin', jwtAuth({ secret }), async ctx => {
    ctx.body = 'admin page protected';
})

module.exports = router.routes();