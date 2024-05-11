'use strict';
// const {
//   Model
// } = require('sequelize');
import { Model } from "sequelize";
module.exports = (sequelize:any, DataTypes:any) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.hasMany(models.Loan,{
        foreignKey : 'memberId',
        as : "loans"
      })
      
      this.hasMany(models.Transaction,{
        foreignKey : "memberId",
        as: "MemberTransaction"
      })
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