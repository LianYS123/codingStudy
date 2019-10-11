const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/5.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')//必须是一个绝对路径
  },
  module: {
    rules:[
      {
        test:/\.(png|jpg|gif)$/i,
        exclude: [
          path.resolve(__dirname,'node_modules')
        ],
        use:{
          loader:'file-loader',
          options:{
            outputPath:path.resolve(__dirname,'build/imgs/')
          }
        }
      }
    ]
  }
}
