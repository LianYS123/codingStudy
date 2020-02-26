const Crawler = require('crawler');
const db = require('../libs/database');
const {PATH_STATIC} = require('../config');
const uuid = require('uuid/v4');
const {notice,fetchFile} = require('./tools');
const imgPath = PATH_STATIC + '/imgs/'

let c1 = new Crawler({
    rateLimit: 500,
    callback: function (err, res, done) {
        if (err) {
            console.log(err);
            notice('../log/spider_err.log',err.message);
        } else {
            let $ = res.$;
            let scrStr = $('script').text();
            let jsonStr = scrStr.substring(scrStr.indexOf('{"ver":{},'), scrStr.indexOf(';(function(){var s;'));
            let json = JSON.parse(jsonStr);
            let {
                actors,
                areas,
                cover,
                evaluate,
                title,
                publish: { is_finish, is_started, pub_date, time_length_show } = {},
                rating: { count: rating_count, score: rating_score } = {},
                staff,
                stat: { favorites, series_follow, views } = {},
                styles,
                type,
                type_name,
                media_id
            } = json.mediaInfo;

            areas = areas.map(area => area.name).join('|');
            styles = styles.map(style => style.name).join('|');
            
            console.log(res.options.uri);
            let img_name = (uuid() + cover.substring(cover.lastIndexOf('.'))).replace(/\-/g,'');
            let path = imgPath + img_name;
            

            let datas = {
                actors,
                areas,
                cover,
                evaluate,
                title,
                is_finish, is_started, pub_date, time_length_show,
                rating_count, rating_score,
                staff,
                favorites, series_follow, views,
                styles,
                type,
                type_name,
                media_id,
                img_name
            };

            (async () => {
                try {
                    if ((await db.getCount('video_info', `media_id=${media_id}`)) == 0) {
                        await db.insert('video_info', datas);
                        fetchFile(cover,path);
                    } else {
                        // await db.update('video_info',datas,`media_id=${media_id}`);
                    }
                }
                catch (e) {
                    console.log(e);
                    notice('../log/spider_err.log',e.message);
                }

            })();
        }
        done();
    }
})
let c2 = new Crawler({
    jQuery: false,
    rateLimit: 500,
    callback(err, res, done) {
        if (err) {
            console.log(err);
        } else {
            let body = res.body.toString();
            // console.log(body);
            console.log(res.options.uri);
            let data = JSON.parse(body).data;
            let list = data.list || [];
            if (list.length == 0) {
                notice('../log/spider_empty.log',res.options.uri);
            }
            links = list.map(item => `https://www.bilibili.com/bangumi/media/md${item.media_id}`);
            c1.queue(links);
            if(data.has_next){
                c2.queue(res.options.uri.replace(/page=\d+/,`page=${data.num+1}`));
            }
        }
        done();
    }
})


let list = [];
// for (let i = 1; i < 11; i++) {
    list.push(`https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=50&type=1`);
    list.push(`https://api.bilibili.com/pgc/season/index/result?style_id=-1&producer_id=-1&release_date=-1&season_status=-1&order=2&st=3&sort=0&page=1&season_type=3&pagesize=50&type=1`);
    list.push(`https://api.bilibili.com/pgc/season/index/result?area=-1&style_id=-1&release_date=-1&season_status=-1&order=2&st=5&sort=0&page=1&season_type=5&pagesize=50&type=1`);
    list.push(`https://api.bilibili.com/pgc/season/index/result?area=-1&style_id=-1&release_date=-1&season_status=-1&order=2&st=2&sort=0&page=1&season_type=2&pagesize=50&type=1`);
// }
c2.queue(list);