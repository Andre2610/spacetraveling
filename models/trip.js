"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING,
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
    trip.belongsToMany(models.user, {
      through: "usertrips",
      foreignKey: "tripId",
    });
  };
  return trip;
};
