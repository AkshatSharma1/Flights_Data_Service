'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flight_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      airplane_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "airplanes",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      departure_airport_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "airports",
          key: "code",
        },
        onDelete: "CASCADE",
      },
      arrival_airport_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "airports",
          key: "code",
        },
        onDelete: "CASCADE",
      },
      arrival_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      departure_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      boarding_gate: {
        type: Sequelize.STRING,
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("flights");
  }
};