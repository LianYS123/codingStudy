const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = function () {
    function resolve(src) {
        return path.resolve(__dirname, src);
    }
    return merge({
        entry: resolve('./src/index.js'),
        output: {
            path: resolve('dist'), //资源输出路径
            filename: 'bundle.js',
            //publicPath:'' 异步资源请求路径
        },
        devServer: {
            // publicPath: '/dist', //接收资源服务器请求时从这里拿文件，不是的话从打包结果中拿
            port: 8080,
            hot: true
        },
        resolve: {
            modules: ['source', 'node_modules']
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html'
            })
        ]
    })
}