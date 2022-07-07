'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      shopping_cart.belongsTo(models.user);
      shopping_cart.hasMany(models.line_item);
    }
  }
  shopping_cart.init({
    shop_created_on: DataTypes.DATE,
    shop_status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate: function (shopping_cart,options){
        shopping_cart.shop_status = shopping_cart.shop_status || "Open";
      }
    },
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};