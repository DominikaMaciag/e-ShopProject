const Product = require('../public/javascripts/product');

exports.getAllProducts= (req, res, next) => {
    const  products = Product.findAll();
    res.render('tea_site', {prods: products});
}