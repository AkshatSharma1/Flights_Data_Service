'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        flight_number: 'UK-808',
        airplane_id: 1, // Boeing 737 (Capacity 300)
        departure_airport_id: 'DEL',
        arrival_airport_id: 'BOM',
        arrival_time: new Date('2024-12-25 14:00:00'),
        departure_time: new Date('2024-12-25 10:00:00'),
        price: 4500,
        boarding_gate: '12A',
        total_seats: 300, 
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        flight_number: 'AI-303',
        airplane_id: 2, // Airbus A320 (Capacity 350)
        departure_airport_id: 'BOM',
        arrival_airport_id: 'DEL',
        arrival_time: new Date('2024-12-25 20:00:00'),
        departure_time: new Date('2024-12-25 18:00:00'),
        price: 4200,
        boarding_gate: '4D',
        total_seats: 350,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        flight_number: 'BA-900',
        airplane_id: 4, // Boeing 747 (Capacity 320)
        departure_airport_id: 'LHR',
        arrival_airport_id: 'JFK',
        arrival_time: new Date('2024-12-26 16:00:00'), // 8 hour flight
        departure_time: new Date('2024-12-26 08:00:00'),
        price: 35000,
        boarding_gate: null, // Gate not assigned yet
        total_seats: 320,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        flight_number: '6E-404',
        airplane_id: 5, // Airbus A330 (Capacity 150)
        departure_airport_id: 'BLR',
        arrival_airport_id: 'DEL',
        arrival_time: new Date('2024-12-25 10:00:00'),
        departure_time: new Date('2024-12-25 07:00:00'),
        price: 6000,
        boarding_gate: '1A',
        total_seats: 150,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Flights', {
      flight_number: { [Op.in]: ['UK-808', 'AI-303', 'BA-900', '6E-404'] }
    });
  }
};