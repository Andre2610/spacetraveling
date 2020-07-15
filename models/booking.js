"use strict";
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define(
    "booking",
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
      paymentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "payments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    },
    {}
  );
  booking.associate = function (models) {
    // associations can be defined here
    booking.belongsTo(models.user);
    booking.belongsTo(models.trip);
  };
  return booking;
};
