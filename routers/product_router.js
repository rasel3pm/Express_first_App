const router = require('express').Router();
const db = require('../database/db')


router.post('/create', (req, res) => {
    const { name, price, id } = req.body;
    const products = db.create(name, price)
    res.status(201).json({ Message: "Product Created Successfully " + products })

})

router.get('', (req, res) => {
    const products = db.find();
    res.status(200).json({ products })
})
module.exports = router