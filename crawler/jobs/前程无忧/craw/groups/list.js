const format = require('date-format');
const { fetchBySelector } = require('../../tools');
function parseTime(time) {
    let result;
    if (time.includes(':')) {
        let cur = format('yyyy-MM-dd', new Date())
        let str = cur + " " + time.substring(0, 5);
        result = new Date(str + ':00');
    } else if (time.includes('-')) {
        result = new Date(time)
    } else {
        result = new Date();
        result.setDate(result.getDate() - parseInt(time));
    }
    return parseInt(result.getTime() / 1000);
}
const selectors = [
    {
        //指定某一个选择器的配置
        selector: '.position_link',
        attr: 'href',
        name: 'detail_url'
    },
    {
        selector: '.position_link',
        attr: 'text',
        name: 'title'
    },
    {
        selector: '.format-time',
        attr: 'text',
        name: 'time',
        handler({ value }) {
            return parseTime(value);
        }
    },
    {
        selector: '.money',
        attr: 'text',
        name: 'salary',
    },
    {
        selector: '.p_bot>.li_b_l',
        attr: 'text',
        name: 'requirement'
    },
    {
        selector: '.company_name',
        attr: 'text',
        name: 'name'
    },
    {
        selector: '.list_item_bot>.li_b_l>span',
        attr: 'text',
        name: 'tags',
        process({ matchs }) {
            if (matchs && matchs.length > 0) {
                return matchs.join('|')
            }
        }
    }
]

const itemProcess = function ({ data }) {
    // console.log(datas);
    // console.log('xxxx')
    let detail_url = data.detail_url;
    if (detail_url) {
        return new Promise((resolve) => {
            fetchBySelector(detail_url, {
                ...require('./detail')
            }).then(({ data: detailData }) => {
                console.log(detailData)
                // console.log({ ...data, ...detailData })
                resolve({ ...data, ...detailData });
            }).catch(console.log)
        })
    } else {
        console.log(data)
        return data;
    }
}
const process = ({ matchs }) => {
    if (matchs && matchs.length > 0) {
        // console.log(matchs)
        return matchs[0]
    }
}

module.exports = { selectors, itemProcess, process };