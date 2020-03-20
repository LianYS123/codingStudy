最佳实践

需要配置的话
根目录下 vue.config.js
//common.js语法
module.exports = {
    devServer:{  //可以再这里配置devServer，也可以写在configureWebpack里面
    
    }
    configureWebpack：{
        name: 'title'  //可以再index.html中使用模板语法将name插入
    }
}

命令： 
所有配置
vue inspect

配置选项[]
vue inspect --rules
vue inspect --plugins
vue inspect --plugins vue-loader  //查看vue-loader插件
...

vue ui  vue的ui界面

链式配置：
//图标依赖
cnpm i svg-sprite-loader -D
//配置
//排除vue-cli默认对svg的配置，引用新的loader
//vue.config.js
chainWebpack(config) {
    cofig.module.rule('svg')
        .exclude.add(resolve('src/icons'))
        .end();  //退回上一级，没有后续操作可以去掉
    config.module
        .rule('icons')  //定义规则，名字是icons
        .test(/\.svg$/)
        .include.add(resolve('src/icons))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader)
        .options({symbolId:'icon-[name]'})  //如果name是qq，将来用的时候就是icon-qq
        .end()
}

查看 vue-inpect icons

//svg/index.js
const req = require.context('./svg',false,/\.svg$/);  修改request的上下文，false表示文件不嵌套
req.keys().map(req);//自动加载

//main.js
import 'svg'

用法:
<svg>
    <use xlink:href="#icon-qq">
</svg>

动态路由
constRoutes:所有人都能看的路由表
asyncRoutes:需要权限才能看到的页面
=> routes:
permission.js
router.beforeEach(() => {
    //如果要访问需要权限的页面
    //获取用户角色
    let {roles} = store.dispatch('user/getInfo')
    let accessRoutes = await store.dispatch('permission/generatorRoutes')  //获取用户能访问的所有路由
    router.addRoutes(accessRoutes)  //将能访问的路由添加到路由器
    next({...to,replace:true})
})

cnpm i -S js-cookie  //
import Cookie from ...
Cookie.get|set|remove

用户模块
user.js
state = {token,roles=[]}


