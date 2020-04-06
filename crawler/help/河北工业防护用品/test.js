const superagent = require('superagent');


superagent.post('http://2019ncov.gsdata.cn/oem/fanghu/action/getSearch.php')
    .set('Cookie', 'PHPSESSID=eahiplmvpehh1a538i932q67o0; Hm_lvt_293b2731d4897253b117bb45d9bb7023=1585530717; Hm_lpvt_293b2731d4897253b117bb45d9bb7023=1585531063')
    .set('Content-Length', 48)
    .send({
        page: 6,
        type: 'scroll',
        sign: 'fe6780da15c93ed8'
    }).set('accept', 'json').then(res => console.log(res.text)).catch(console.error);

