let cart = null;

module.exports = class Cart {
    static save(product){
        if(cart){ //jesli koszyk nie jest pusty
            const existingProductIndex = cart.products.findIndex(p => p.id == product.id); //sprawdzamy czy produkt jest już dodany do koszyka
            if(existingProductIndex>=0){ //jeśli jest w koszyku
                const existingProduct = cart.products[existingProductIndex];
                existingProduct.qty += 1;
                cart.totalPrice += product.price;
            }
            else { //jeśli nie jest w koszyku
                product.qty = 1;
                cart.products.push(product);
                cart.totalPrice += product.price;
            }
        }
        else{ //jesli koszyk jest pusty
            cart = {products: [], totalPrice: 0};
            product.qty = 1;
            cart.products.push(product);
            cart.totalPrice += product.price;
        }
    }

    static getCart(){
        return cart;
    }

    static delete(productId){
        const isExisting = cart.products.findIndex(p=> p.id == productId);
        if(isExisting >= 0){
            const deletedProduct = cart.products[isExisting];
            cart.totalPrice -= deletedProduct.price * deletedProduct.qty;
            cart.products.splice(isExisting,1);
        }
    }
}