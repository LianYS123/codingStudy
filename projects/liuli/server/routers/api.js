const Router = require('koa-router');
let router = new Router();
router.get('/', async ctx => {
    let { page = 1, page_size = 20, order = 'common', tags = '', desc = 'desc' } = ctx.query;
    page = parseInt(page);
    page_size = parseInt(page_size);
    tags = tags ? tags.split(',').map(tag => `tags like ${ctx.db.valueFilter(tag)}`).join(' or ') : '1=1';
    // let columns = [];
    let orders = {
        time: 'time',
        rating_score: 'rating_score',
        rating_score: 'rating_count',
        common: 'pow(rating_score, 3) * sqrt(rating_count)'
    };
    let sql = `select * from article where ${tags} order by ${orders[order]} ${desc} limit ?,?`;
    console.log(sql);
    let rows = await ctx.db.query(sql, [(page - 1) * page_size, page_size]);
    let count = await ctx.db.getCount('article', `${tags}`);
    ctx.body = { ok: true, data: { rows, total: parseInt(count / page_size) } };
})

module.exports = router.routes();