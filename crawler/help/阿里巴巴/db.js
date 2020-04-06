const mysql = require('mysql2/promise');
// const mysql = require('mysql');
// const co = require('co-mysql');
const assert = require('assert');

const db = mysql.createPool({
    database: 'job',
    host: 'localhost',
    password: 'tb1766318380',
    user: 'lian'
});
module.exports = db;
let valueFilter = function (item) {
    return typeof item === 'string' ? `\"${item.replace(/\\/g, '\\').replace(/\"/g, '\\"')}\"` : item;
}
let columnFilter = function(column){
    return `\`${column}\``;
}
//提取列数组和值数组
let fieldsToArr = function(fields){
    let columns = Object.keys(fields).filter(column => typeof fields[column] !== 'undefined');
    let values = columns.map(column => valueFilter(fields[column]));
    return {
        columns: columns.map(columnFilter),
        values
    }
}

// {a:1,b:2} => [a=1,b=2]
let fieldsToSqlArr = function (fields, separator='=') {
    let arr = Object.keys(fields)
        .filter(column => typeof fields[column] !== 'undefined')
        .map(column => `${columnFilter(column)}${separator}${valueFilter(fields[column])}`);
    return arr;
}

db.valueFilter = valueFilter;
db.columnFilter = columnFilter;
db.fieldsToSqlArr = fieldsToSqlArr;
//通用方法
//where语句未经安全处理
db.select = async function (tableName, columns = ['*'], where = '1=1') {
    sql = `select ${columns.map(columnFilter).join(',')} from ${tableName} where ${where}`;
    console.log(sql);
    return (await db.query(sql));
}
//fields: {column,value}
db.insert = async function (tableName, fields) {
    let {columns,values} = fieldsToArr(fields);
    let sql = `insert into ${tableName} (${columns.join(',')}) values(${values.join(',')})`;
    console.log(sql);
    return await db.query(sql);
}
db.update = async function (tableName, fields = {}, where) {
    assert(typeof where !== 'undefined',"更新数据必须提供where参数") 
    let sql = `update ${tableName} set ${fieldsToSqlArr(fields).join(',')} where ${where}`;
    console.log(sql);
    await db.query(sql);
}

//如果有limit也可以附在where字符串后面
db.delete = async function (tableName, where) {
    await db.query(`delete from ${tableName} where ${where}`);
}

db.getCount = async function (table, where = '1=1') {
    let rows = await db.query(`select count(*) c from ${table} where ${where}`)
    return rows[0]['c'];
}