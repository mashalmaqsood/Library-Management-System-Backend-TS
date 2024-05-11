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
      "Copies",
      [
        {
          status: "Available",
          bookId: 1,
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
        {
          status: "Checked out",
          bookId: 2,
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
