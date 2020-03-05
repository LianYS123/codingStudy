const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge.smart(common,{
    mode:'production',
    output:{
        filename: '[name]@[chunkhash].js',
    }
})