"use strict";
// const { Model } = require("sequelize");
import { Model } from "sequelize";
module.exports = (sequelize:any, DataTypes:any) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.belongsTo(models.Member, {
        foreignKey: "memberId",
        as: "member",
      });
      
      this.belongsTo(models.Copy, {
        foreignKey: "copyId",
        as: "loanCopy",
      });
    }
  }
  
  Loan.init(
    {
      loanDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      returnDate: { type: DataTypes.DATE, allowNull: false },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      copyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Loan",
    }
  );
  return Loan;
};
