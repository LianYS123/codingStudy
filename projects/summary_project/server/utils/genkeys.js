const uuid = require('uuid/v4')
const fs = require('fs')
const {key_file} = require('../config')
const KEY_COUNT = 1000
let keys = []
for(let i = 0; i < KEY_COUNT; i ++){
    keys.push(uuid().replace(/\-/g,''))
}
fs.writeFileSync(key_file,keys)

