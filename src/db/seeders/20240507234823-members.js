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
      "Members",
      [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "0321526343",
          address: "1234 Elm Street, Springfield, USA",
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
        {
          name: "Jane Smith",
          email: "jane.smith@email.com",
          phone: "032152634",
          address: "4567 Oak Avenue, Metropolis, USA",
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
