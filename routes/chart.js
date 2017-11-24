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

/* GET chart page. */
router.get('/', function(req, res, next) {
    connection.query('select * from use_count where user_id =?',5, function(err,rows){
        
        var usercount=[rows[0].usercount]
        var usertime=[]
        for (let i=1;i<rows.length;i++){
            
            usercount[i]=rows[i].usercount+usercount[i-1]                        
            usertime.push(rows[i].usertime);
        }
        

        res.render('chart', { 
            usercount: usercount,
            usertime: usertime
        });
        
    });
});

module.exports = router;




