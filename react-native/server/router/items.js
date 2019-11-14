const Router = require('koa-router')
let router = new Router()

function dateFormat(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    return today
}
router.get('/list',async ctx=>{
    let rows = await ctx.db.query('select * from account_book')
    let data = rows.map(row => ({...row,time:dateFormat(row.time)}))
    ctx.body = {ok:true,data}
})
router.get('/add',async ctx => {
    let {account, info, income} = ctx.query
    console.log(account,info,income)
    await ctx.db.query(
        'insert into account_book (account,info,income,time) values (?,?,?,?)',
        [account, info, income, getDate()])
    ctx.body = {ok:true}
})

module.exports = router.routes()