const fse = require('fs-extra');
const {PATH_NOTICE} = require('../config');
module.exports = async function(msg) {
    console.log(msg);
    await fse.appendFile(PATH_NOTICE, msg + '\n', function(err){
        if(err){
            console.log('notice error!' + PATH_NOTICE);
            console.log(err);
        }
    })
}