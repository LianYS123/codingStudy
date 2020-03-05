const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/7.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')//必须是一个绝对路径
  },
  module: {
    rules:[
      {
        test:/\.jsx?$/i,
        exclude: [
          path.resolve(__dirname,'node_modules')
        ],
        use:{
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
