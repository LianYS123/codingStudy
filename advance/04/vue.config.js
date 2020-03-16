module.exports = {
  configureWebpack:{
    devServer:{
      proxy:{
        '/api': {
          target:'http://127.0.0.1:3000/',  //这里要写全路径
          changeOrigin: true,
          // "ignorePath": true,
          "secure": false
        },
      }
      // before(app){
      //   app.get('/api/login',function(req,res){
      //     let {username,password} = req.query;
      //     if(username==='lian' && password === '123'){
      //       res.json({ok:1,token:'this is a token'});
      //     } else {
      //       res.status(401).json({ok:0,message:'用户名或密码错误'});
      //     }
      //   })
      // }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
