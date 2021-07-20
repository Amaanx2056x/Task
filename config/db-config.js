const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'Test'
  },
  migrations:{
    directory: __dirname + '/migrations'
  }
});
module.exports = knex