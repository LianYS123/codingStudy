const Router = require('koa-router')
const {test} = require('../../libs/validator')
const {sign} = require('../../libs/common')
let router = new Router();

router.post('/',async ctx => {
    let {username,password} = ctx.request.fields
    test(username,'username',true)
    test(password,'password',true)
    password = sign(password)
    let {id} = (await ctx.db.query('select id from admin where username = ? and password = ?',[username,password]))[0]
    if(id){
        console.log('login success')
        ctx.session.admin = id
        ctx.body = {ok:true}
    } else {
        console.log('login failed')
        ctx.body = {ok:false, err:'用户名或密码错误'}
    }
})

module.exports = router.routes()