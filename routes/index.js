const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'hanstar',
    password: 'gksxorud',
    port: 3306,
    database: 'test',
    dateStrings: 'date'
});
connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  let sql='select sum(usercount) as usersum from use_count';
  connection.query(sql, function(err, rows, fields){
    let usercount= rows[0].usersum
    res.render('index', { 
      title: 'I USE TUMBLER',
      count: usercount
    });
  })
});


/* POST */
router.post('/', function(req, res, next){
  let usecnt = req.body.used;
  let sql=`insert into use_count(user_id,usercount,usertime) values(3,${usecnt},now())`;
  connection.query(sql, function(err, rows, fields){   
    res.redirect('/');

  });
})

module.exports = router;
