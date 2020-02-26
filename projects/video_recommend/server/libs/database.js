const mysql = require('mysql');
const co = require('co-mysql');
const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = require('../config')

let conn = mysql.createPool({
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASS,
    user: DB_USER,
    port: DB_PORT
});
let db = co(conn);
module.exports = db;

let filter = function (item) {
    return typeof item === 'string' ? `\"${item.replace(/\\/g, '\\').replace(/\"/g, '\\"')}\"` : item;
}
let convert = function (fields) {
    let str = Object.keys(fields)
        .filter(field => fields[field])
        .map(field => `\`${field}\`=${filter(fields[field])}`)
        .join(' and ');
    return str;
}
db.filter = filter;
db.convert = convert;
//通用方法
db.select = async function (tableName, fields = ['*'], where = '1=1') {
    sql = `select ${fields.join(',')} from ${tableName} where ${where}`;
    console.log(sql);
    return (await db.query(sql));
}
//fields: {column,value}
db.insert = async function (tableName, fields) {
    let keys = Object.keys(fields).filter(key => typeof fields[key] !== 'undefined');
    let values = keys.map(key => filter(fields[key]));
    let sql = `insert into ${tableName} (${keys.join(',')}) values(${values.join(',')})`;
    console.log(sql);
    return await db.query(sql);
}
db.update = async function (tableName, fields = {}, where) {
    let tmp = Object.keys(fields)
        .filter(key => typeof fields[key] != 'undefined')
        .map(key => `${key}=${filter(fields[key])}`)
    let sql = `update ${tableName} set ${tmp.join(',')} where ${where}`;
    console.log(sql);
    await db.query(sql);
}
db.delete = async function (tableName, where) {
    await db.query(`delete from ${tableName} where ${where}`);
}

//简单方法
db.getById = async function (id, table, fields = ['*']) {
    let rows = await db.query(`select ${fields.join(',')} from ${table} where id = ?`, id)
    if (rows.length == 0) throw 'no data'
    return rows[0]
}
db.delById = async function (id, table) {
    await db.query(`delete from ${table} where id = ?`, [id])
}
db.getCount = async function (table, where = '1=1') {
    let rows = await db.query(`select count(*) c from ${table} where ${where}`)
    return rows[0]['c']
}