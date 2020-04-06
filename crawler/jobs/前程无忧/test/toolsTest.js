const { fetchBy, fetchFile, fetchBySelector, notice, craw, db } = require('../tools');
const { emailReg } = require('../tools/regs');

fetchBy(null, emailReg).then(res => {
    console.log(res);
})

fetchFile('http://www.jxufe.edu.cn/uploadfile/69/202003/68c9f1cc61.png').then(console.log).catch(console.log)

notice('hello').then(console.log)

craw('http://www.jxufe.edu.cn/').then(res => {console.log(res.$('title').text())}).catch(console.log);

db.getCount('job_info').then(console.log)
db.select('job_info').then(console.log)