const { order, user, line_item, shopping_cart, product } = require("../models");
const crypto = require("crypto");

class OrderController {
  static async getAllOrder(req, res) {
    try {
      let orders = await order.findAll({
        
      });

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getAllOrderUser(req, res) {
    try {
      let id = Number(req.userData.id);
      
      let orders = await order.findAll({
        where: {
          userId: id,
        },
        include: [user,line_item]
      });
      res.status(200).json(orders);
      // console.log(orders)
      // console.log(req.userData)
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async createOrder(req, res) {
    try {
      const productId = +req.params.id;
      const { order_total_qty, order_city, order_addres } = req.body;
      // console.log(Number(order_total_qty))
      const order_subtotal = order_total_qty;
      const userId = +req.userData.id;
      const order_created_on = new Date();
      const order_payt_trx_number = crypto.randomBytes(16).toString("hex");
      let product_file = await product.findByPk(productId);
      // console.log(product_file)
      let tax = 0.1;
      let product_price = Number(product_file.prod_price);
      let harga_total = (product_price + (product_price * tax));
      const order_total_due = +harga_total;
      let orderId_user = await order.findOne({
        order: [
          ['createdAt', 'DESC']
        ],
      });
      const orderId=orderId_user.id+1 || 1

      let shoppingId_user = await shopping_cart.findOne({
        order: [
          ['createdAt', 'DESC']
        ],
      });
      const shoppingCartId=shoppingId_user.id+1 || 1

      const shop_created_on = new Date();
      let createShoppingCart = await shopping_cart.create({
        shop_created_on,
        userId,
      });
      let createLineitems = await line_item.create({
        productId,
        shoppingCartId,
        orderId,
      });
      let createOrder = await order.create({
        order_created_on,
        order_subtotal,
        order_total_due,
        order_total_qty,
        order_payt_trx_number,
        order_city,
        order_addres,
        userId,
      });

      res.status(200).json({
        message: "Success Order",
      });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ error: error.message });
    }
  }

  static async updateOrder(req, res) {
    try {   
      const id = req.params.id;
      const userId = +req.userData.id;
      // console.log(userId);
      const { order_total_qty, order_city, order_addres } = req.body;
      let discount = 0;
      if (Number(order_total_qty) >= 2) {
        discount = 0.05;
      } else {
        discount = 0;
      }
      let tax = 0.1;
      const order_discount = +discount;

      let product_file = await line_item.findOne({
        where: {
          orderId: id,
        },
        include: [product]
      });

      let product_price = Number(product_file.product.prod_price);
      let harga_semua_product = product_price * order_total_qty;
      let harga_total = (harga_semua_product + (harga_semua_product * tax)) - (harga_semua_product * Number(discount));
      const order_total_due = +harga_total;

      const order_subtotal = order_total_qty;
      const order_created_on = new Date();
      const order_payt_trx_number = crypto.randomBytes(16).toString("hex");

      let updateOrder = await order.update(
        {
          order_created_on,
          order_subtotal,
          order_discount,
          order_total_due,
          order_total_qty,
          order_payt_trx_number,
          order_city,
          order_addres,
          //open or cancelled or paid or shipping or closed
          userId,
        },
        {
          where: { id },
        }
      );

      updateOrder[0] === 1
        ? res.status(201).json({
            message: "Order updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async updateOrderAdmin(req, res) {
    try {
      const id = Number(req.params.id);
      const {
        order_status,
        order_tax
      } = req.body;
      let userId = Number(req.userData.id);

      let products = await order.update(
        {
          order_status,
          order_tax
        },
        {
          where: { id },
        }
      );
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async deleteOrder(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let deleteOrder = await order.destroy({
        where: {
          id: id,
        },
      });

      let deleteLineItem = await line_item.destroy({
        where: {
          orderId: id,
        },

      });
      deleteOrder === 1
        ? res.status(200).json({
            message: "Order deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async getOrderById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getOrderById = await order.findAll({
        where: {
          id,
          userId,
        },
      });
      res.status(200).json(getOrderById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = OrderController;
