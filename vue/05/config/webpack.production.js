const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    output:{
        filename:'bundle.js',
        path:resolve(__dirname,"./build")
    },
   
    plugins:[
        new  HtmlWebpackPlugin({
            template:resolve(__dirname,'../index.html')//模板，根据模板自动生成html，多加一个script,test模式下不需要
        })
    ]
}