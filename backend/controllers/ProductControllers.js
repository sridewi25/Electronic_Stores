const { product, user } = require("../models");

class ProductController {
  static async getProductById(req, res) {
    try {
      const id = Number(req.params.id);

      let products = await product.findAll({
        where: {
          id: id,
        },
      });
      console.log(products[0]);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async getProduct(req, res) {
    try {
      let getproduct = await product.findAll({
        include: [user],
      });

      res.status(200).json(getproduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createProduct(req, res) {
    try {
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
        prod_image,
      } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      const userId = +req.userData.id;
      let createproduct = await product.create({
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
        prod_image,
        userId,
      });

      res.status(201).json(createproduct);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = Number(req.params.id);
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_image,
      } = req.body;
      let userId = Number(req.userData.id);

      let products = await product.update(
        {
          prod_name,
          prod_desc,
          prod_price,
          prod_stock,
          prod_weight,
          prod_category,
          prod_brand,
          prod_condition,
          prod_total_sold,
          prod_rating,
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
  static async deleteProduct(req, res) {
    try {
      const id = Number(req.params.id);
      let products = await product.destroy({
        where: { id },
      });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = ProductController;
