const merge = require('webpack-merge');
const path = require('path');
const WebpackHtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge({
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        hot: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude:/node_modules/,
                use: [{
                    loader:'babel-loader',
                    options:{
                        cacheDirectory: true,
                        presets: [['@babel/preset-env',{modules:false}]]
                    }
                }]
            },
            {
                test:/\.css/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/i,
                use:['vue-loader','vue-style-loader','vue-html-loader','vue-template-compiler']
            },
            {
                test:/\.(png|jpg|svg)/i,
                use: {
                    loader:'url-loader',
                    options:{
                        limit: 10000,
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
})