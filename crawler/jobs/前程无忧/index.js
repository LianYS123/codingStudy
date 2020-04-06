const format = require('date-format');
const { fetchBySelector, fetchFile, notice, craw, db, utils } = require('../tools');
const option = require('./config')
const links = utils.createLinks('https://www.lagou.com/hangzhou-zhaopin/webqianduan/?filterOption=${i}', 1, 2);
const parseResult = require('./parseResult');

links.forEach(link => {
    fetchBySelector(link, option).then(parseResult)
})

// links.forEach(link => {
//     craw(link).then(res => {
//         let $ = res.$;
//         let fetch_url = res.options.uri;
//         let text = $('.s_position_list > .item_con_list> .con_list_item .position_link').text();
//         console.log(text);
//         // $('.s_position_list > .item_con_list> .con_list_item ').each(function () {
//         //     let title = $(this).find('.position_link').text();
//         //     let detail_url = $(this).find('.position_link').attr('href');
//         //     let time = $(this).find('.format-time').text().trim();
//         //     let release_time = parseTime(time);
//         //     let salary = $(this).find('.money').text();
//         //     let requirement = $(this).find('.p_bot>.li_b_l').text();
//         //     let name = $(this).find('.company_name').text();
//         //     let tags = [];
//         //     $(this).find('.list_item_bot>.li_b_l>span').each(function () {
//         //         tags.push($(this).text());
//         //     });
//         //     tags = tags.join('|');
//         //     let listData = { title, fetch_url, release_time, salary, requirement, name, tags, detail_url }
//         //     console.log(listData)

//         //     detail
//         //     craw(detail_url, { listData }).then(res => {
//         //         console.log('*'.repeat(50))
//         //         console.log('fetching ' + detail_url)
//         //         const { listData } = res.options;
//         //         const $ = res.$;
//         //         let desc = $('.job-detail').text();
//         //         let address = $('.work_addr').text();
//         //         let home_page = $('.icon-glyph-home').siblings('a').attr('title');
//         //         let logo = $('img.b2').attr('src');
//         //         let data = { ...listData, desc, address, home_page, logo };

//         //         Object.keys(data).forEach(key => { data[key] = removeSpace(data[key]) })
//         //         // console.log(data);
//         //         db.insert('job_info', data)
//         //     })

//         // })
//     })
// })
