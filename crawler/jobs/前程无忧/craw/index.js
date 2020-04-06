const { fetchBySelector, utils, db } = require('../tools');
const option = require('./config');

const links = utils.createLinks('https://www.lagou.com/hangzhou-zhaopin/webqianduan/?filterOption=${i}', 1, 1);

links.forEach(link => {
    fetchBySelector(link, option).then(({ data }) => {

        // console.log(data);
        console.log('---------------------')
    }).catch(console.log)
})
