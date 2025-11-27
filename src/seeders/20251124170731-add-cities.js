'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        name: 'New Delhi',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mumbai',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bangalore',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'London',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Paris',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'New York',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Cities', {
      name: { [Op.in]: ['New Delhi', 'Mumbai', 'Bangalore', 'London', 'Paris', 'New York'] }
    });
  }
};