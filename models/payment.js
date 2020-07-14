"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      cardNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      securityCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  payment.associate = function (models) {
    // associations can be defined here
  };
  return payment;
};
