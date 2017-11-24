const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const index = require('./routes/index.js');
const about = require('./routes/about.js');
const chart = require('./routes/chart.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// public file 
app.use(express.static(path.join(__dirname, 'public')));
// bodyParser 
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/', index);
app.use('/about', about);
app.use('/chart', chart);


app.listen(3000,() => console.log('server start!'));





