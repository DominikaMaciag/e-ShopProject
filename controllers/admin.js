const Product = require('../public/javascripts/product');

exports.getProductForm = (req, res, next)=> { //middleware
    res.render('admin_page', { });
};

exports.postProduct = (req, res, next)=> { //gdy klikniemy button
    console.log("save product..");
    //console.log(req.body);
    const title = req.body.title;
    const price = req.body.price;
    const photo = req.body.photo;

    const prod = new Product(title,price,photo); //tworzymy instancje klasy
    prod.save(); //this z product.js reprezentuje prod
    console.log(Product.findAll());

    res.send("Saved successfully!");
}