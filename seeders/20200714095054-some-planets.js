"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          name: "Mercury",
          distance: 103256,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venus",
          distance: 71708,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          distance: 110573,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter",
          distance: 619256,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturn",
          distance: 1346593,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uranus",
          distance: 3004248,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neptune",
          distance: 4395927,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("planets", null, {});
  },
};
