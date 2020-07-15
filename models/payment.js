"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  payment.associate = function (models) {
    // associations can be defined here
    payment.hasOne(models.booking);
    payment.belongsTo(models.user);
  };
  return payment;
};
