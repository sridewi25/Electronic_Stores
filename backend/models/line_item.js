'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      line_item.belongsTo(models.product);
      line_item.belongsTo(models.shopping_cart);
      line_item.belongsTo(models.order);
    }
  }
  line_item.init({
    line_qty: DataTypes.INTEGER,
    line_status: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate: function (line_item,options){
        line_item.line_status = line_item.line_status || "Open";
        line_item.line_qty = line_item.line_qty || 1;
        line_item.shoppingCartId = line_item.shoppingCartId || 1;
        line_item.orderId = line_item.orderId || 1;
      }
    },
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};