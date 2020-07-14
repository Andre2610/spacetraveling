"use strict";
module.exports = (sequelize, DataTypes) => {
  const usertrip = sequelize.define(
    "trip",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      tripId: {
        type: DataTypes.INTEGER,
        references: {
          model: "trips",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    },
    {}
  );
  usertrip.associate = function (models) {
    // associations can be defined here
  };
  return usertrip;
};
