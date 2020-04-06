const valueFilter = function (item) {
    return typeof item === 'string' ? `\"${item.replace(/\\/g, '\\').replace(/\"/g, '\\"')}\"` : item;
}
const columnFilter = function (column) {
    return `\`${column}\``;
}
//提取列数组和值数组
const fieldsToArr = function (fields) {
    let columns = Object.keys(fields).filter(column => typeof fields[column] !== 'undefined');
    let values = columns.map(column => valueFilter(fields[column]));
    return {
        columns: columns.map(columnFilter),
        values
    }
}

// {a:1,b:2} => [a=1,b=2]
const fieldsToSqlArr = function (fields, separator = '=') {
    let arr = Object.keys(fields)
        .filter(column => typeof fields[column] !== 'undefined')
        .map(column => `${columnFilter(column)}${separator}${valueFilter(fields[column])}`);
    return arr;
}
module.exports = {
    valueFilter,
    columnFilter,
    fieldsToArr,
    fieldsToSqlArr
}