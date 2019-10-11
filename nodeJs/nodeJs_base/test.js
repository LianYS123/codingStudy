let util = require('myUtils');

let buf = new Buffer('abc\r\n\r\ndef\r\n\r\ngha\r\ndfd')
let [a,b,c] = util.bufferSplit(buf,'\r\n\r\n');
// console.log(a.toString(),b.toString(),c.toString());
console.log(c.indexOf('\r\n'));
