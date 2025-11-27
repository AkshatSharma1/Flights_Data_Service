'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seats = [];
    const airplaneId = 1; // Assuming Airplane #1 exists from previous seeds
    
    // Create 30 Rows
    for(let r = 1; r <= 30; r++) {
        // Create 6 Columns (A, B, C, D, E, F)
        const cols = ['A', 'B', 'C', 'D', 'E', 'F'];
        for(let c = 0; c < cols.length; c++) {
            seats.push({
                airplane_id: airplaneId,
                row: r,
                col: cols[c],
                // First 5 rows are Business Class, rest are Economy
                type: (r <= 5) ? 'business' : 'economy', 
                created_at: new Date(),
                updated_at: new Date()
            });
        }
    }

    await queryInterface.bulkInsert('Seats', seats);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', { airplane_id: 1 });
  }
};