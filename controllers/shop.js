const Product = require('../public/javascripts/product');
const Cart = require('../public/javascripts/cart');

exports.getAllProducts= (req, res, next) => {
    const  products = Product.findAll();
    res.render('tea_site', {prods: products});
}

exports.addToCart = (req,res,next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    Cart.save(addedProduct);
    console.log(Cart.getCart());
    res.end('added successfully!');
}