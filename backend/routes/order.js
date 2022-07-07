const orderRoute = require('express').Router();
const OrderController = require('../controllers/OrderControllers');
const {authentication} = require('../middleware/auth')

orderRoute.get('/order_user',authentication,OrderController.getAllOrderUser);
orderRoute.get('/',authentication,OrderController.getAllOrder);
orderRoute.post('/create_order/:id',authentication,OrderController.createOrder)
orderRoute.put('/update_order/:id',authentication,OrderController.updateOrder)
orderRoute.put('/update_order_admin/:id',authentication,OrderController.updateOrderAdmin)
orderRoute.delete('/delete_order/:id',authentication,OrderController.deleteOrder)
orderRoute.get('/info_order/:id',authentication,OrderController.getOrderById)

module.exports = orderRoute;

