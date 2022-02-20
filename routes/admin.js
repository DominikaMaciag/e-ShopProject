const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin_page');
});

router.get('admin/products', function(req, res, next) {
    res.send('add products');
});

//Exports
module.exports = router;
