const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const fs = require('fs')
const db = require('./db');

let cookie = `ali_ab=104.224.172.114.1576162118170.7; cna=XNcdEgoL0wICAWoFK88BcoWW; UM_distinctid=16efa96888e818-06e5c219f98364-2393f61-144000-16efa96888f668; taklid=ff04497a20e9496ea59f3af50ce18e60; cookie2=1619cdde27ac426c37e096e5186c8cee; hng=US%7Czh-CN%7CUSD%7C840; t=94fa1b92f39de04c54503d80cf086044; _tb_token_=5e653eeea5f57; lid=tb18370078473; h_keys="%u53e3%u7f69#%u889c%u5b50"; alicnweb=touch_tb_at%3D1585213681756%7Clastlogonid%3Dtb18370078473; cookie1=B0BTlfCYxEBk0oIOeKsCvaG16kVIcUjwEh%2BJ5moSb6o%3D; cookie17=UU8INVCH0DjRlA%3D%3D; sg=306; csg=00db8b10; unb=2709721930; uc4=nk4=0%40FY4PZPwXHY3AakHQ%2BfYlBv%2B1FZyV3JU8&id4=0%40U22PEFmMRpQsr%2BtGtIfhMNGHcduA; __cn_logon__=true; __cn_logon_id__=tb18370078473; ali_apache_track=c_mid=b2b-2709721930c8050|c_lid=tb18370078473|c_ms=1; ali_apache_tracktmp=c_w_signed=Y; _nk_=tb18370078473; last_mid=b2b-2709721930c8050; _csrf_token=1585213727699; _is_show_loginId_change_block_=b2b-2709721930c8050_false; _show_force_unbind_div_=b2b-2709721930c8050_false; _show_sys_unbind_div_=b2b-2709721930c8050_false; _show_user_unbind_div_=b2b-2709721930c8050_false; __rn_alert__=false; ad_prefer="2020/03/26 17:22:35"; ali_beacon_id=101.229.9.238.158521468628.687102.8; l=dBrzmoZeqdGDma_bKOfMIOWFCa7TaBRfGsPzSANiAIB19zXscdnvPHwE0URDO3QQKtfbWFtyBx8hMd3kSka38Eti0X21PussTD99-; isg=BMzMjaRP_mNZo-kRhf0SnorjnSr-BXCv12NYHCaLAXWgsWi7ShYIPslDVbGJ-agH`;

let detail = new Crawler({
    // jQuery: true,
    rateLimit: 500,
    headers: {
        cookie,
        "user-agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36`
    },
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // console.log(res.body.toString());
            // let $ = res.$;
            console.log('......')
            console.log(res.body.toString())
            fs.writeFileSync('./1.html',res.body)
        }
        done();
    }
})
let craw = new Crawler({
    // jQuery: true,
    rateLimit: 500,
    headers: {
        cookie: `ali_ab=104.224.172.114.1576162118170.7; _bl_uid=FjkR345j2qquaj96Fig9286km8pw; cna=XNcdEgoL0wICAWoFK88BcoWW; UM_distinctid=16efa96888e818-06e5c219f98364-2393f61-144000-16efa96888f668; taklid=ff04497a20e9496ea59f3af50ce18e60; cookie2=1619cdde27ac426c37e096e5186c8cee; hng=US%7Czh-CN%7CUSD%7C840; t=94fa1b92f39de04c54503d80cf086044; _tb_token_=5e653eeea5f57; lid=tb18370078473; h_keys="%u53e3%u7f69#%u889c%u5b50"; alisw=swIs1200%3D1%7C; cookie1=B0BTlfCYxEBk0oIOeKsCvaG16kVIcUjwEh%2BJ5moSb6o%3D; cookie17=UU8INVCH0DjRlA%3D%3D; sg=306; csg=00db8b10; unb=2709721930; uc4=nk4=0%40FY4PZPwXHY3AakHQ%2BfYlBv%2B1FZyV3JU8&id4=0%40U22PEFmMRpQsr%2BtGtIfhMNGHcduA; __cn_logon__=true; __cn_logon_id__=tb18370078473; ali_apache_track=c_mid=b2b-2709721930c8050|c_lid=tb18370078473|c_ms=1; ali_apache_tracktmp=c_w_signed=Y; _nk_=tb18370078473; last_mid=b2b-2709721930c8050; _csrf_token=1585213727699; _is_show_loginId_change_block_=b2b-2709721930c8050_false; _show_force_unbind_div_=b2b-2709721930c8050_false; _show_sys_unbind_div_=b2b-2709721930c8050_false; _show_user_unbind_div_=b2b-2709721930c8050_false; __rn_alert__=false; ad_prefer="2020/03/26 17:22:35"; ali_beacon_id=101.229.9.238.158521468628.687102.8; alicnweb=touch_tb_at%3D1585216395099%7Clastlogonid%3Dtb18370078473; l=dBrzmoZeqdGDmp5SBOfiROWFCa79aIRb4sPzSANiAICP9T1XGXRGWZ4KZSTWCnGNh6JDR3Jt3efvBeYBqGXnLjD7R-lpRFDmn; isg=BHJypHjgePGju0dDPztUbAB9w7hUA3adDc22rjxLTyWyzxLJJJIWrXplu2Pzv-41`,
        referer: "https://www.1688.com/?spm=b26110380.2178313.0.d5.775a2030uXMEzW",
        ":authority": "shop435k7765ud417.1688.com",
        ":path": `/page/creditdetail.htm?spm=b26110380.2178313.result.10.6fc12030Z6ZRMi`,
        ":scheme": "https",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-site",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    },
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // let $ = res.$;
            console.log('......')
            console.log(res.body.toString())
            // console.log($('title').text())
        }
        done();
    }
})


const detialUrl = "https://shenganvip.1688.com/page/creditdetail.htm?spm=b26110380.2178313.result.115.775a2030pzHhRj";
const listUrl = "https://s.1688.com/company/company_search.htm?encode=utf-8&keywords=%BF%DA%D5%D6&netType=1%2C11&n=y&pageSize=30&offset=0&beginPage=99";


// function fetchLinks(start, end) {
//     let links = [];
//     for (let i = start; i <= end; i++) {
//         links.push(`https://www.alibaba.com/trade/search?spm=a2700.supplier-normal.16.4.36d07303gdxTzW&viewType=L&indexArea=company_en&page=${i}&keyword=face_mask&f1=y&n=38`)
//     }
//     return links;
// }

// let links = fetchLinks(1,75);


// craw.queue(links);
// craw.queue(listUrl);
detail.queue(detialUrl);

