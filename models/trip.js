"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      departingDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
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
