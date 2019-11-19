const uuid = require('uuid/v4')
const fs = require('fs')
const {path_key} = require('../config')
const KEY_COUNT = 1000
let keys = []
for(let i = 0; i < KEY_COUNT; i++){
    let key = uuid().replace(/\-/i,'')
    keys.push(key)
}
fs.writeFileSync(path_key,keys.join(','))