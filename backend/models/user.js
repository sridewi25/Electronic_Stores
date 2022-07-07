"use strict";
const { encryptPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.product);
      user.hasMany(models.order);
      user.hasMany(models.shopping_cart);
    }
  }
  user.init(
    {
      user_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name must not be empty!",
          },
        },
      },
      user_email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must not be empty!",
          },
        },
      },
      user_password: {
        type: DataTypes.STRING,
      },
      user_gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Gender must not be empty!",
          },
        },
      },
      user_type: {
        type: DataTypes.STRING,
      },
    },

    {
      hooks: {
        beforeCreate: (user, options) => {
          user.user_password = encryptPassword(user.user_password);
          user.user_type = "User";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
