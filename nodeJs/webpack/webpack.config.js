const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/8.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')//必须是一个绝对路径
  },
  devtool: 'source-map'
}
