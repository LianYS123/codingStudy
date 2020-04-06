const mysql = require('mysql2/promise');
const assert = require('assert');
const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = require('../../config');
const { valueFilter, columnFilter, fieldsToArr, fieldsToSqlArr } = require('./dbUtils')

const db = mysql.createPool({
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASS,
    user: DB_USER,
    port: DB_PORT
});

//通用方法
//where语句未经安全处理
db.select = async function (tableName, columns = ['*'], where = '1=1') {
    sql = `select ${columns.map(columnFilter).join(',')} from ${tableName} where ${where}`;
    console.log(sql);
    return (await db.query(sql));
}
//fields: {column,value}
db.insert = async function (tableName, fields) {
    let { columns, values } = fieldsToArr(fields);
    let sql = `insert into ${tableName} (${columns.join(',')}) values(${values.join(',')})`;
    console.log(sql);
    return await db.query(sql);
}
db.update = async function (tableName, fields = {}, where) {
    assert(typeof where !== 'undefined', "更新数据必须提供where参数")
    let sql = `update ${tableName} set ${fieldsToSqlArr(fields).join(',')} where ${where}`;
    console.log(sql);
    await db.query(sql);
}

//如果有limit也可以附在where字符串后面
db.delete = async function (tableName, where) {
    await db.query(`delete from ${tableName} where ${where}`);
}

db.getCount = function (table, where = '1=1') {
    let sql = `select count(*) c from ${table} where ${where}`;
    console.log(sql);
    return db.query(sql).then(rows => rows[0][0]['c']);
}

module.exports = db;