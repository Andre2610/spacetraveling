"use strict";
module.exports = (sequelize, DataTypes) => {
  const planet = sequelize.define(
    "planet",
    {
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {}
  );
  planet.associate = function (models) {
    // associations can be defined here
  };
  return planet;
};
