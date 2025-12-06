'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("airports", [
      {
        name: "Kempegowda International Airport",
        code: "BLR",
        city_id: 3, // Bangalore
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        city_id: 2, // Mumbai
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        city_id: 1, // New Delhi
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Heathrow Airport",
        code: "LHR",
        city_id: 4, // London
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "John F. Kennedy International Airport",
        code: "JFK",
        city_id: 6, // New York
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("airports", {
      code: { [Op.in]: ["BLR", "BOM", "DEL", "LHR", "JFK"] },
    });
  }
};