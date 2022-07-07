const route = require('express').Router();

route.get('/', (req,res) =>{
    res.status(200).json({
        message: "Dashboard Electronic Stores"
    })
})

const ProductRoutes = require('./product');
const OrderRoutes = require('./order');
const UserRoutes = require('./user');

route.use('/products', ProductRoutes)
route.use('/orders', OrderRoutes)
route.use('/users', UserRoutes)

module.exports = route;