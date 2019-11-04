const path = require('path')

module.exports = {
    mode:'development',
    entry:path.resolve(__dirname,'js/main.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test : /\.(jpg|png|gif)$/i,
                exclude:[
                    path.resolve(__dirname,'node_moudles')
                ],
                use:{
                    loader: 'file-loader',
                    options:{
                        output:'img/'
                    }
                }
            }
        ]
    },
    devtool:'source_map'
}