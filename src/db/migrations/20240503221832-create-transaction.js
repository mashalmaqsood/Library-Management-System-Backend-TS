'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      transactionType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      copyId:{
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Copies',
            key: 'id',
         }
      },
      memberId:{
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Members',
            key: 'id',
         }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};