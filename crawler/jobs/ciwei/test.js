const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const db = require('./db');
let detail = new Crawler({
    jQuery: true,
    rateLimit:500,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // console.log(res.body.toString());
            let $ = res.$;
            // console.log($(".content-value").text());
            // let fields = ["business_type", "country_or_region", "main_products",
            //  "ownership", "total_employees", "total_annual_revenue", "year_established",
            //   "certifications_1", "product_certifications_1", "patents", "trademarks_1","main_markets"];

            let map ={
                "fetch_url": "fetch_url",
                "Business Type": "business_type",
                "Country / Region": "country_or_region",
                "Main Products": "main_products",
                "Ownership": "ownership",
                "Total Employees": "total_employees",
                "Total Annual Revenue": "total_annual_revenue",
                "Year Established": "year_established",
                "Certifications(1)": "certifications_1",
                "Certifications": "certifications_1",
                "Product Certifications(1)": "product_certifications_1",
                "Product Certifications": "product_certifications_1",
                "Patents": "patents",
                "Trademarks(1)": "trademarks_1",
                "Trademarks": "trademarks_1",
                "Main Markets": "main_markets"
            }

            let fields = [];
            
            $('.field-title').each(function(){
                let field = $(this).text().trim();
                field = field.replace(/\d+/g,"1");
                fields.push(map[field]);
            })
            let result = {title:res.options.title,fetch_url:res.options.uri};
            // console.log(fields);


            $(".content-value").each(function (index) {
                let text = $(this).text();
                // console.log(text);
                if(fields[index]){
                    result[fields[index]] = text;
                }
            })

            db.insert('company_profile', result).catch(err => {
                console.error(err);
                notice('./crawler_err.log', err.message + " when fetch uri: " + res.options.uri);
                notice('./err_data.log', err.message + " when fetch uri: " + res.options.uri + "\n" + JSON.stringify(result) + "\n\n");
            });
            // console.log(result);
            // notice('./3.json',JSON.stringify(result));

        }
        done();
    }
})
let craw = new Crawler({
    jQuery: true,
    rateLimit:500,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            let $ = res.$;
            let links = [];
            $('.m-item').each(function () {
                let title = $(this).find('.title a').text();
                let href = $(this).find('.title a').attr("href");
                // console.log(title, href);
                links.push({
                    uri:href,
                    title
                })
            })
            detail.queue(links);
            // console.log($('.m-item').length())
        }
        done();
    }
})

const detialUrl = "https://hefeifastnonwoven.en.alibaba.com/company_profile.html#top-nav-bar";
const indexUrl = "https://www.alibaba.com/trade/search?spm=a2700.supplier-normal.16.4.36d07303gdxTzW&viewType=L&indexArea=company_en&page=1&keyword=face_mask&f1=y&n=38";


function fetchLinks(start, end) {
    let links = [];
    for (let i = start; i <= end; i++) {
        links.push(`https://www.alibaba.com/trade/search?spm=a2700.supplier-normal.16.4.36d07303gdxTzW&viewType=L&indexArea=company_en&page=${i}&keyword=face_mask&f1=y&n=38`)
    }
    return links;
}

let links = fetchLinks(1,75);


craw.queue(links);
// detail.queue(detialUrl);
