"use strict";
// const { Model } = require("sequelize");
import { Model } from "sequelize";

module.exports = (sequelize:any, DataTypes:any) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here

      this.belongsTo(models.Copy, {
        foreignKey: "copyId",
        as: "copytransaction",
      });
    }
  }
  
  Transaction.init(
    {
      transactionDate: { type: DataTypes.DATE, allowNull: false },
      transactionType: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.INTEGER, allowNull: false },
      copyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
