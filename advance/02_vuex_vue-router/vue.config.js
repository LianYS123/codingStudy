//node js 代码
module.exports = {
    // publicPath:'prefix'  //所有路由的前缀
    //配置webpack
    configureWebpack: {
        devServer: {
            //服务器钩子，
            before(app) {
                //app 是express实例
                app.get('/goods',(req,res) => {
                    res.json([
                        {id: 1,text: 'hello'},
                        {id: 2,text: 'world'}
                    ])
                })
            }
        }
    }
}