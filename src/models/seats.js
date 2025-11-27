'use strict';
const { Model } = require('sequelize');
const { Enums } = require('../utils/common');
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = Enums.SEAT_TYPE;

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      // Seat belongs to an Airplane
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: 'airplane'
      });
    }
  }
  Seat.init({
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
      defaultValue: ECONOMY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
    tableName: 'Seats',
    underscored: true,
  });
  return Seat;
};