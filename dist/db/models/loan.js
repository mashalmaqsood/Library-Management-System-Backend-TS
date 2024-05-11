"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Model } = require("sequelize");
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Loan extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
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
    Loan.init({
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
    }, {
        sequelize,
        modelName: "Loan",
    });
    return Loan;
};
