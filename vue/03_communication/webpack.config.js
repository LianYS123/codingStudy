const path = require('path');

module.exports={
    entry:path.resolve(__dirname,"./src/vm2.js"),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,"./build")
    },
    mode:'development'
}