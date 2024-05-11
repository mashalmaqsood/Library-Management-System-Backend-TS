"use strict";
import { Model } from "sequelize";
module.exports = (sequelize :any, DataTypes:any) => {
  class Copy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.hasMany(models.Loan, {
        foreignKey: "copyId",
        as: "copyloans",
      });

      this.belongsTo(models.Book, {
        foreignKey: "bookId",
        as: "book",
      });
      
      this.hasMany(models.Transaction, {
        foreignKey: "copyId",
        as: "copytransaction",
      });
    }
  }

  Copy.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Copy",
    }
  );
  return Copy;
};
