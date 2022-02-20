const products = [];

class Product {
    constructor(title,price,photo) {
        this.title = title;
        this.price = price;
        this.photo = photo;
    }
    save(){
        products.push(this);
    }

    static findAll(){
        return products;
    }
}

module.exports = Product;