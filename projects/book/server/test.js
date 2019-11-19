const path = require('path')
let dirname = __dirname
let resolve = (name) => {
    path.resolve(dirname,name)
}

console.log(resolve('a'))  //undefined