"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn("trips", "origin", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "planets",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    //   allowNull: false,
    // }),
    await queryInterface.addColumn("trips", "planetId", {
      type: Sequelize.INTEGER,
      references: {
        model: "planets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("trips", "origin");
    await queryInterface.removeColumn("trips", "planetId");
  },
};
