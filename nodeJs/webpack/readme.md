# webpack 唯一的作用就是：打包
webpack.config.js
module.exports ={
  mode:'none','production','development'
  entry: '入口'||{rukou1:路径,rukou2:路径} //必须是一个绝对路径
  output:{
    path,
    filename
  }
}


单入口，多入口
entry{
  name1:'....js'
  name2:'路径'
}
output{
  filename:'[name].min.js'
}



# loader:帮助webpack处理js以外的文件   替webpack预处理文件，让webpack认识他
在main.js中引入文件：
import '../xxx.css'

## style-loader css-loader
模块
module:{
  rules:[//规则，用loader处理webpack不认识的文件
    {test:/\.css$/,use:['style-loader','css-loader']}//.css结尾的就用css-loader来处理  顺序很重要，从后往前
  ]
}

css-loader:让css成为文件的一部分 实际将文件转换成字符串暴露出去：module.exports='background:'
style-loader:让css成为页面里面的style标签  创建style标签

## 处理兼容
postcss-loader无法单独工作 会查找postcss.config.js文件
autoprefixer
以上：
{test:/\.css$/,use:['style-loader','css-loader','postcss-loader']}

postcss.config.js文件下
module.exports={
  plugins:[
    require('autoprefixer')
  ]  
}
在webpack里面加的plugins以后说


## file-loader:读取并输出文件
```javascript
{test:/\.(jpg|png|gif)$/,use:{
  loader:'file-loader',
  options:{
    outputPath: '输出路径'
  }
}}
```
## url-loader:读取文件并输出到base64，可以取代file-loader :打包到bundle.js里
```javascript
- file-loader:读取并输出文件
{test:/\.(jpg|png|gif)$/,use:{
  loader:'url-loader',
  options:{
    outputPath: '输出路径',
    limit:8*1024//限制成8k,8k以下的处理
  }
}}
```
//import {xxx,xxx} from aaa 会把aaa中的所有内容引入进来

## less-loader

['style-loader','css-loader','less-loader']


## babel-loader,@babel/core,@babel/preset-env
```javascript
{
  test:/\.jsx?/i,
  exclude:/node_modules/,
  use:{
    loader:'babel-loader',
    options:{
      presets:['@babel/preset-env']
    }
  }
}
```

## sourcemap:
devtool:'source-map'//编译过方便调试

dev-server:会读配置文件，不会编译到文件，编译到内存
需要mode:development
webpack本地 webpack-cli webpack-dev-server
不能直接启动，必须放在script里面
不需要再web.config.js里面配置

注意路径:生成的虚拟文件在./bundle.js，或者指定publicPath:路径

#代码质量管理
eslint
eslint eslint-loader
配置文件：
eslintrc

#测试
jest
jest jest-webpack

test('name1' () => {
    expect(表达式).toBe(结果)
})
