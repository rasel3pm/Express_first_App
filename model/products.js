const shortId = require('shortid')
class Products {
    /**
     * 
     * @param {string} name 
     * @param {number} price 
     */
    constructor(name, price) {
        this.id = shortId
        this.name = name;
        this.price = price;
        this.created = new Date();
    }
}

module.exports = Products;