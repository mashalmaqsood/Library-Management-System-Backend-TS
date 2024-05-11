'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// const {
//   Model
// } = require('sequelize');
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Member extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Loan, {
                foreignKey: 'memberId',
                as: "loans"
            });
            this.hasMany(models.Transaction, {
                foreignKey: "memberId",
                as: "MemberTransaction"
            });
        }
    }
    Member.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Member',
    });
    return Member;
};
