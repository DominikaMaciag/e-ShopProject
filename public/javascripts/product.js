const products = [];

class Product {
    constructor(title,price,photo,id) {
        this.title = title;
        this.price = new Number(price);
        this.photo = photo;
        this.id = id;
    }
    save(){
        this.id = Math.floor(Math.random()*100000);
        products.push(this);
    }

    static findAll(){
        return products;
    }

    static findById(prodId){
        return products.filter(p => p.id == prodId);
    }
}

module.exports = Product;