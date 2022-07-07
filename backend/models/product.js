"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.user);
      product.hasMany(models.line_item);
    }
  }
  product.init(
    {
      prod_name: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Name must not be empty!"
          }
        }
      },
      prod_desc: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Description must not be empty!"
          }
        }
      },
      prod_price: {
        type: DataTypes.INTEGER,
        validate:{
          notEmpty:{
            message:"Price must not be empty!"
          }
        }
      },
      prod_stock: {
        type: DataTypes.INTEGER,
        validate:{
          notEmpty:{
            message:"Stock must not be empty!"
          }
        }
      },
      prod_expire: DataTypes.DATE,
      prod_weight: {
        type: DataTypes.INTEGER,
        validate:{
          notEmpty:{
            message:"Weight must not be empty!"
          }
        }
      },
      prod_category: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Category must not be empty!"
          }
        }
      },
      prod_brand: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Brand must not be empty!"
          }
        }
      },
      prod_condition: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Condition must not be empty!"
          }
        }
      },
      prod_total_sold: DataTypes.INTEGER,
      prod_rating: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message:"Rating must not be empty!"
          }
        }
      },
      prod_views: DataTypes.INTEGER,
      prod_image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (product, options) => {
          product.prod_total_sold = 0;
          product.prod_expire = 0;
          product.prod_views =0;
        },
      },
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
