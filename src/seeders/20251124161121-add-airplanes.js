'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     * name: 'John Doe',
     * isBetaMember: false
     * }], {});
    */

    //Since seederd donot add createdAt and updatedAt automatically, we need to manually add
    await queryInterface.bulkInsert('airplanes', [
      {
        model_number: 'Boeing737',
        capacity: 300,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        model_number: 'AirbusA320',
        capacity: 350,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        model_number: 'Boeing777',
        capacity: 400,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        model_number: 'Boeing747',
        capacity: 320,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        model_number: 'AirbusA330',
        capacity: 150,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // We use Op.or to delete only the rows we inserted, 
    // to avoid wiping data that might have been added manually.
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('airplanes', { 
      model_number: { [Op.in]: ['Boeing737', 'AirbusA320', 'Boeing777', 'Boeing747', 'AirbusA330'] } 
    });
  }
};