const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    entry1: path.resolve(__dirname,'src/js/1.js'),
    entry2: path.resolve(__dirname,'src/js/2.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'./build')//必须是一个绝对路径
  }
}
