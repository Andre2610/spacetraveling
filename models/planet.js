"use strict";
module.exports = (sequelize, DataTypes) => {
  const planet = sequelize.define(
    "planet",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {}
  );
  planet.associate = function (models) {
    // associations can be defined here
    planet.hasOne(models.trip);
  };
  return planet;
};
