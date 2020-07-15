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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  planet.associate = function (models) {
    // associations can be defined here
    planet.hasMany(models.trip);
  };
  return planet;
};
