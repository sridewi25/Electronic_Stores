const productRoute = require("express").Router();
const ProductController = require("../controllers/ProductControllers");
const {authentication} = require('../middleware/auth')

productRoute.get("/info_product/:id",ProductController.getProductById);
productRoute.post("/add",authentication,ProductController.createProduct);
productRoute.get("/",ProductController.getProduct);
productRoute.put('/update_product/:id',authentication,ProductController.updateProduct)
productRoute.delete('/delete_product/:id',authentication,ProductController.deleteProduct)

module.exports = productRoute;
