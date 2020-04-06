
const fetchLinks = require('./fetchLinks')
const {fetchByReg} = require('../tools')
const { emailReg } = require('./tools/regs');
const set = new Set();

module.exports = function (uri, path = '../emails.txt') {
    fetchLinks(uri).then(links => {
        links.forEach(link => {
            fetchByReg(link, emailReg).then(emails => {
                emails.forEach(email => {
                    if (set.has(email)) return;
                    console.log(email);
                    notice(link + " : " + email, path)
                    set.add(email);
                })
            })
        })
    })
}
