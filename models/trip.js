"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      origin: {
        type: DataTypes.INTEGER,
        references: {
          model: "planets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      destination: {
        type: DataTypes.INTEGER,
        references: {
          model: "planets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departingDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  trip.associate = function (models) {
    // associations can be defined here
    trip.hasOne(models.planet);
    trip.hasMany(models.booking);
  };
  return trip;
};
