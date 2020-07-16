"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: true,
      },
      tripId: {
        type: Sequelize.INTEGER,
        references: {
          model: "trips",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      paymentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "payments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookings");
  },
};
