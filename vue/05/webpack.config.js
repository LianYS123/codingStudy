const {resolve} = require('path');


module.exports=function(env,argv){
    env = env || {};
    return {
        entry:resolve(__dirname,'./src/main.js'),
        
        resolve:{
            alias:{
                'vue':'vue/dist/vue.esm',//起个别名，告诉webpack引用时提到vue指的是vue/dist/vue.esm 注意：两边都要加引号
            }
        },
        ...env.development?require(resolve(__dirname,'config/webpack.devepoment')):require(resolve(__dirname,'config/webpack.production'))
    }
}