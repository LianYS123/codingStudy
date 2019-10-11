let http = require('http');
let querystring = require('querystring');
let url = require('url');
let fs = require('fs');

let users = {
  zhangsan: '123',
  lisi: '456'
};
let server = http.createServer((req,res) => {
  let {pathname,query} = url.parse(req.url);
  console.log(pathname);
  let str = '';
  req.on('data',data => {
    str += data;
  });
  req.on('end',() => {

    let user = querystring.parse(str);

    switch (pathname) {
      case '/login':
        res.write('login');
        res.end();
        break;
      case '/reg':
        let username = user.username;
        let password = user.password;
        if(!username){
          res.write('username is required');
        } else if(!password){
          res.write('passwoed is required');
        } else if(users[username]){
          res.write('username already exist');
        } else{
          users[username] = password;
          res.write('register success');
        }
        res.end();
        break;
      default:
        fs.readFile(`www/${pathname}`,(err,data) => {
          if(err){
            res.writeHeader(404);
            res.write('Not Found');
          } else{
            res.write(data);
          }
          res.end();
        })
    }

  })
}).listen(8080)
