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
      "Loans",
      [
        {
          loanDate: "2024-05-07",
          returnDate: "2024-05-17",
          memberId: 1,
          copyId: 1,
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
        {
          loanDate: "2024-05-10",
          returnDate: "2024-05-20",
          memberId: 2,
          copyId: 2,
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
