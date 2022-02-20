const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

//Routes
const routes = require('./routes/index');
const adminRoutes = require('./routes/admin');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //using ejs instead of jade

//middle-wear
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//telling express module that public folder has all the assets
app.use(express.static(__dirname+'/public'));

//Routes..
app.use('/admin', adminRoutes);
app.use('/', routes);

//Error: page not found
app.use((req,res,next)=>{
    const err = new Error("Page not found!");
    err.status = 404;
    next(err);
});

module.exports = app;
