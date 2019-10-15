const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    entry1: path.resolve(__dirname,'src/js/3.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./build')//必须是一个绝对路径
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}
