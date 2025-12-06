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
    await queryInterface.addIndex("flights", {
      fields: ["departure_airport_id", "arrival_airport_id"],
      name: "flights_src_dest_index",
    });

    //Index for price search filter
    await queryInterface.addIndex("flights", {
      fields: ["price"],
      name: "flights_price_index",
    });

    //Index for date filtering
    await queryInterface.addIndex("flights", {
      fields: ["departure_time"],
      name: "flights_date_index",
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    await queryInterface.removeIndex("flights", "flights_src_dest_index");
    await queryInterface.removeIndex("flights", "flights_price_index");
    await queryInterface.removeIndex("flights", "flights_date_index");
  }
};
