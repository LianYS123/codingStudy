const regs = require('./regexp')
module.exports = {
    test(value, re, required = true){
        if(!value && required) {
            throw 'value is required'
        } 
        if(typeof re == 'string') {
            re = regs[re]
        }
        if(!re.test(value)) {
            throw 'invalid value'
        }
    }
}