const fetchLinks = require('../libs/fetchLinks');
let uri = 'http://www.jxufe.edu.cn/';
fetchLinks(uri).then(links => {
    console.log(links);
})

