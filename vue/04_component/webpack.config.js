const path = require('path');

module.exports={
    mode:'development',
    entry:path.resolve(__dirname,'./src/main2.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    }

}