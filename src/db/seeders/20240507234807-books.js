'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      "Books",
      [
        {
          title : "The Pragmatic Programmer",
          author: "Dave Thomas",
          ISBN : "978-0135957059",
          genre: "Computer Science",
          publishedYear: 1999,
          publisher: "Addison-Wesley",
          createdAt: "2024-05-07",
          updatedAt: "2024-05-07"
        },
        {
            title: "The Art of Computer Programming",
            author: "Donald Knuth",
            ISBN: "978-0321751041",
            genre: "Computer Science",
            publishedYear: "1968",
            publisher: "Addison-Wesley",
            createdAt: "2024-05-07",
            updatedAt: "2024-05-07"
        },
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
