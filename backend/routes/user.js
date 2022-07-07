const userRoute = require('express').Router();
const UserController = require('../controllers/UserControllers');


userRoute.post('/login', UserController.loginuser);
userRoute.post('/register', UserController.createUser);

module.exports = userRoute;
