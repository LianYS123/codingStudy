const Router = require('koa-router');
const { test, testAll } = require('../libs/validator');
const {sign,setUser} = require('../libs/common')
const uuid = require('uuid/v4');
let router = new Router();

router.get('/token', async ctx => {
    let token = uuid().replace(/\-/g, '');
    await ctx.db.insert('token', { token });
    ctx.body = {
        ok: true,
        token
    }
})

router.post('/login', async ctx => {
    let { username, password } = ctx.request.fields;
    let {'x-token':token} = ctx.header;
    testAll({ username, password, token });
    password = sign(password);
    let rows = await ctx.db.select('user',['id'],`${ctx.db.convert({username,password})}`);
    if (rows.length) {
        setUser(token,rows[0]['id']);
        ctx.body = {ok:true};
    } else {
        ctx.body = {ok:false,msg:'用户名或密码错误'};
    }
})


router.post('/reg', async ctx => {
    let { username, password } = ctx.request.fields;
    let {'x-token':token} = ctx.header;
    testAll({ username, password, token });
    password = sign(password);
    let rows = await ctx.db.select('token',['user_id'],`${ctx.db.convert({token})}`);
    let count = await ctx.db.getCount('user',`${ctx.db.convert({username})}`);
    if(count){
        ctx.body = {ok:false, msg:'用户名已存在'};
    } else if(rows.length == 0){
        ctx.body = { ok: false, msg : 'token 失效' };
    } else if (rows[0]['user_id']) {
        ctx.body = {ok:false, msg:'用户已存在，请登录'};
    } else {
        let {insertId} = await ctx.db.insert('user', { username, password });
        console.log(insertId);
        if(insertId){
            await ctx.db.update('token',{user_id:insertId},`${ctx.db.convert({token})}`);
        }
        ctx.body = { ok: true };
    }
})


module.exports = router.routes();