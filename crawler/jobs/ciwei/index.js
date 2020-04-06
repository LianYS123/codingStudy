const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const db = require('./db');

function parseTime(date) {
    return date ? Math.floor(+new Date(date) / 1000) : undefined;
}

const detail = new Crawler({
    jQuery: false,
    rateLimit: 500,
    callback(err, res, done) {
        console.log('fetch detail page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // console.log(res.body.toString());
            const { data } = JSON.parse(res.body.toString());
            let {
                "title": title,
                "jobClassString": job_class,
                "salary": salary,
                "education": education,
                "fulltime_type_string": working_days,
                "baomingendtime": deadline,
                "addtime": release_time,
                "jobCount": job_count
            } = res.options.data;


            deadline = parseTime(deadline);
            release_time = parseTime(release_time);
            job_count = parseInt(job_count)

            let {
                "comfullname": name,
                "cname": name2,
                "telephone": telephone,
                "adress": address,
                "provinces_string": provinces,
                "city_string": city,
                "region_string": region,
                "comurl": home_page,
                "logo": logo,
                "visit_logo": visit_logo,
                "scale": scale,
                "comdes": desc,
                "companyEmail": company_email
            } = data.companyInfo;

            logo = logo || visit_logo;
            name = name || name2;
            telephone = telephone || undefined;
            

            let result = {
                title, job_class, salary, education, working_days,
                deadline, release_time, job_count, telephone, address,
                provinces, city, region, home_page, logo, name, scale, desc,
                company_email,fetch_url: res.options.fetch_url,detail_url: res.options.uri
            }
            // console.log(result);
            // console.log(JSON.stringify(result));

            // notice('./3.json',JSON.stringify(result))

            db.insert('job_info', result).catch(err => {
                console.error(err);
                notice('./crawler_err.log', err.message + " when fetch uri: " + res.options.uri);
                notice('./err_data.log', err.message + " when fetch uri: " + res.options.uri + "\n" + JSON.stringify(result) + "\n\n");
            });
        }
        done();
    }
})

let craw = new Crawler({
    jQuery: false,
    rateLimit: 500,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // console.log(res.body.toString());
            const { data: { lists: list } } = JSON.parse(res.body.toString());
            let detailLinks = [];
            list.filter(item => item.company_id).forEach(item => {
                detailLinks.push({
                    data: item,
                    fetch_url: res.options.uri,
                    uri: `https://www.ciweishixi.com/api/Shixi_Company/detail?company_id=${item.company_id}`
                })
            });
            // console.log(list);
            // console.log(detailLinks);
            detail.queue(detailLinks)
        }
        done();
    }
})

//抓取从start到end页的数据
// detail: https://www.ciweishixi.com/api/Shixi_Company/detail?company_id=23926

craw.queue("https://www.ciweishixi.com/api/Shixi_Pc/search?city=383&getCount=1&key=%E5%89%8D%E7%AB%AF&page=1&pageSize=50");
