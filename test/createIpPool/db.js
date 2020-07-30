
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'lian',
      password : 'tb1766318380',
      database : 'lian'
    }
});

module.exports = knex;