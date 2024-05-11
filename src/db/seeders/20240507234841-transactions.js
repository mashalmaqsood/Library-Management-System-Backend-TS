"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          transactionDate: "2024-05-10",
          transactionType: "Renewal",
          amount: 1200,
          copyId: 1,
          memberId: 1,
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
        {
          transactionDate: "2024-05-20",
          transactionType: "Fine",
          amount: 800,
          copyId: 2,
          memberId: 2,
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
