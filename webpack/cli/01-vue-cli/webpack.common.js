const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        'ventor': ['vue'],
        'index': path.join(__dirname, './src/index/index.js'),
        'space': path.join(__dirname, './src/space/space.js'),
        'category': path.join(__dirname, './src/category/category.js'),
    },
    output: {
        path: path.join(__dirname, 'dist')   //与devServer的publicPath保持一致，不要写./dist
    },
    // optimization:{
    //     splitChunks:{
    //         chunks: 'all'
    //     }
    // },
    devServer: {
        publicPath: '/dist/', // 不要用path.join()
        hot: true,
        port: 8081
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [['@babel/preset-env',{modules:false}]]
                    }
                }]
            },
            {
                test: /\.vue$/i,
                exclude: /node_modules/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test:/\.(png|svg|jpg)$/i,
                use: [{
                    loader:'url-loader',
                    options:{
                        limit: 10240,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            inject: true,
            chunks:['index','ventor'],
            template: path.join(__dirname, './template/index.html')
        }),
        new HtmlWebpackPlugin({
            filename:'space.html',
            inject: true,
            chunks:['space','ventor'],
            template: path.join(__dirname, './template/space.html')
        }),
        new HtmlWebpackPlugin({
            filename:'category.html',
            chunks:['category','ventor'],
            inject: true,
            template: path.join(__dirname, './template/category.html')
        })
    ]
}