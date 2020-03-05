const regs = require('./regexp')
function test(value, re, required = true){
    if(!value && required) {
        throw 'value is required'
    } else if(value){
        if(typeof re == 'string') {
            re = regs[re]
        }
        if(!re.test(value)) {
            throw 'invalid value'
        }
    }
}
//{re:value,...}
function testAll(values, required = true){
    for(let re in values){
        test(values[re], re, required);
    }
}
module.exports = {
    test,testAll
}