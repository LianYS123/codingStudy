const path = require('path');
const fs = require('fs');
const crypto = require('crypto')

module.exports = {
  generateKeys(){
    const KEY_LENGTH = 1024;
    const KEY_COUNT = 2048;
    const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+!@#$%^&*()<?>'
    let keys = [];
    for(let i = 0; i < KEY_COUNT; i++){
      keys[i] = '';
      for(let j = 0; j < KEY_LENGTH; j++){
        keys[i] += CHARS.split('')[Math.floor(Math.random() * CHARS.length)];
      }
    }
    fs.writeFileSync('.keys',keys.join('\n'));
  },
  sign(str){
    let obj = crypto.createHash('md5');
    obj.update(str);
    return obj.digest('hex');
  }
}
