const crypto = require('crypto')
let obj = crypto.createHash('md5');
obj.update('123456');
return obj.digest('hex')
