const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const shopController = require('../controllers/shop');

//Connecting to database:
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"MyNewPass",
  port: "3306",
  database:"dbtest",
  connectionLimit:20
});
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

/* Routing - render renderuje z view nasze htmlowe podstrony */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sklep internetowy' });
});

router.get('/login', function (req,res,next){
  res.render('login');
});

router.post('/login',encoder, function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  connection.query("select * from users where nickname = ? and passwd = ? ",[username,password], function(error,results,fields){
    if(username == "admin"){
      res.redirect('/admin');
    }
    else if(results.length > 0){
      res.redirect('/');
    }
    else {
      res.redirect('/login');
    } res.end();
  });
});

router.get('/register', function(req,res,next){
  res.render('register');
});

router.post('/register', encoder, function(req,res){
  let n = req.body.nick;
  let p = req.body.pass;
  let m = req.body.mail;
  console.log("You are registered now !");
  connection.query("INSERT INTO users(nickname,passwd,mail) values ?;", [[[n,p,m]]], function(error,results,fields){
    res.redirect('/login');
    console.log(n, p, m);
  });
});

///PODSTRONA Z PRZEDMIOTAMI
router.get('/tea', shopController.getAllProducts);
router.post('/tea', shopController.addToCart);

///KOSZYK ZAKUPOWY
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.deleteInCart);

///PODSTRONA Z OPISEM FIRMY
router.get('/coffee', function(req, res, next) {
  res.render('coffee_site');
});

//Exports
module.exports = router;
