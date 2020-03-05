const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard/plugin');
module.exports = merge.smart(common,{
    mode:'development',
    output:{
        filename: '[name]@[hash].js',  // .js文件后缀名不能不写，不然htmlWebpackplugin不会注入.js文件
    },
    devtool:'source-map',
    plugins:[
       new Dashboard(),
       new webpack.HotModuleReplacementPlugin(),  //HMR 模块热替换
    ]
})