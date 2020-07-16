"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          name: "Mercury",
          distance: 103256,
          description:
            "A very toxic planet, very toxic beaches & very toxic atmosphere. Claim your 10% discount now! ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venus",
          distance: 71708,
          description:
            "At one point it was thought this planet might have been a tropical paradise, but now it's just HOT.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          distance: 110573,
          description:
            "Home to the tallest mountain in the solar system, some say it's compensating...",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter",
          distance: 619256,
          description:
            "The Great Red Spot in its surfice is a huge storm that has raged for at least 350 years. Bring chocolate.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturn",
          distance: 1346593,

          description:
            "The king among planets! It has a top-notch Spa - Amazing sushi and some of the most invigorating Spanish Paella, of course they're all toxic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uranus",
          distance: 3004248,
          description:
            "Uranus turns on its axis once every 17 hours. Uranus has two sets of very thin dark coloured rings. We send rockets to Uranus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neptune",
          distance: 4395927,
          description:
            "Despite being smaller than Uranus, Neptune has a greater mass. #ChonkyPlanet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pluto",
          distance: 49452,
          description:
            "Pluto sometimes has an atmosphere, mostly when nobody mentions it got demoted to a Dwarf Planet",
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
