const router = require('express').Router();
const productRouter = require('../routers/product_router')




router.get('/health', (req, res) => {
    res.status(200).json({ message: "message requist successfully" })
})

router.use('/api/v1/product', productRouter)


module.exports = router;