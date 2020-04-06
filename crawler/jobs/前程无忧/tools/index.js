const fetchFile = require('./fetchFile');
const fetchBySelector = require('./fetchBySelector');
const match = require('./match');
const notice = require('./notice');
const fetchBy = require('./fetchByReg');
const db = require('./db');
const craw = require('./craw');
const { convertFnWithLog } = require('./utils');
const utils = require('./utils');
const expo = {
    fetchFile,
    notice,
    match,
    fetchBySelector,
    fetchBy,
    craw
}

module.exports = { ...convertFnWithLog(expo), db: convertFnWithLog(db), utils }