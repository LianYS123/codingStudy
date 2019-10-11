const Router = require('koa-router')
let router = new Router();
router.get('/login',async ctx => {
  await ctx.render('admin/login',{
    title: 'admin ejs',
    url: ctx.config.url
  })
});
router.post('/login',async ctx => {
  let {username,password} = ctx.request.fields;
  let admin = ctx.admin;
  console.log(username,password,admin);
  ctx.assert(username, 400, 'username is required');
  ctx.assert(password,400,'password is required');
  ctx.assert(admin[username], 400, 'username or password is wrong');
  ctx.assert(admin[username] == password, 400, 'username or password is wrong');

  ctx.body = '登陆成功';
})
module.exports = router.routes();
