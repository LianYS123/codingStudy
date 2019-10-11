const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./app/main.js", // string | object | array  // 默认为 './src'
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板
    publicPath: "/xvni/"
  },
  watch: true,
  mode: "development",
  module: {
  // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
        {
          test: /\.js$/,//以.js 文件结尾的文件
          include: [
            path.resolve(__dirname, "app/")//包括
          ],
          exclude: [
            path.resolve(__dirname, "./node_modules")//不包括
          ],
          use:{
            loader: "babel-loader",
            options: {
              presets: ["ES2015"]
            }
          }
        }
      ]
  }
}