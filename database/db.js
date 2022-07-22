const Products = require('../model/products')

class ProductsDB {
    constructor() {
        this.data = [];
    }

    //create products

    create(name, price) {
        const products = new Products(name, price)
        this.data.push(products)
        return products
    }

    find() {
        return this.data
    }
}

const db = new ProductsDB()

module.exports = db;