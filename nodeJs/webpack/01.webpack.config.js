const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/1.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./build')//必须是一个绝对路径
  }
}
