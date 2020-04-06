const format = require('date-format')
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

let time1 = parseTime('19:15发布');
let time2 = parseTime('2020-02-26');
let time3 = parseTime('1天前发布');

console.log(time1)
console.log(time2)
console.log(time3)
console.log('*'.replace(200))

console.log(new Date(time1 * 1000))
console.log(new Date(time2 * 1000))
console.log(new Date(time3 * 1000))