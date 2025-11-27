'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //Index for trip search
    await queryInterface.addIndex('Flights',{
      fields: ['departure_airport_id', 'arrival_airport_id'],
      name: 'flights_src_dest_index'
    })

    //Index for price search filter
    await queryInterface.addIndex('Flights',{
      fields:['price'],
      name:'flights_price_index'
    })

    //Index for date filtering
    await queryInterface.addIndex('Flights',{
      fields: ['departure_time'],
      name: 'flights_date_index'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    await queryInterface.removeIndex('Flights','flights_src_dest_index');
    await queryInterface.removeIndex('Flights', 'flights_price_index');
    await queryInterface.removeIndex('Flights', 'flights_date_index');
  }
};
