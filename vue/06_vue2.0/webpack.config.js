const {resolve} = require('path');


module.exports=function(env,argv){
    env = env || {};
    return {
        entry:resolve(__dirname,'./src/main.js'),

        module:{
            rules:[
                {
                    test:/\.vue$/i,
                    // use:['vue-loader',' vue-style-loader', 'vue-html-loader', 'vue-template-compiler']
                    use:['vue-loader']
                },
                {
                    test:/\.css$/i,
                    use:['vue-style-loader','style-loader']
                }
            ]
        },
        
        resolve:{
            extensions: ['.js', '.vue'],
            alias:{
                'vue':'vue/dist/vue.esm',//起个别名，告诉webpack引用时提到vue指的是vue/dist/vue.esm 注意：两边都要加引号
                '@':resolve(__dirname,'components')
            }
        },
        ...env.development?require(resolve(__dirname,'config/webpack.devepoment')):require(resolve(__dirname,'config/webpack.production'))
    }
}