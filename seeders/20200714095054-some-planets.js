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
            "The planet that is toxic for your skin and sebs favorite! please edit me! I am a poor description :(",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venus",
          distance: 71708,
          description:
            "known to throw very heavy tempers once a month - advise using chocolate icecream and korean drama series untill tempers are over",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          distance: 110573,
          description:
            "A fierce competitor of the distant planet Twixus-maximus, the two planet empires have been at war since the dawn of mankind - go mars!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter",
          distance: 619256,
          description: "a less impressive version of Saturn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturn",
          distance: 1346593,

          description:
            "the king among planets! it has a top-notch Spa - amazing sushi and some of the most invigorating spanish paelia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uranus",
          distance: 3004248,
          description:
            "widely known for its corny yet highly effective jokes - pretty cool planet has around 200 mega-solar magnatic storms a day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neptune",
          distance: 4395927,
          description:
            "the waterplanet named after the God, this planet has the biggest waterbody in our solar system. travelers going to this planet are urged to read the 'how to swim for dummys' booklet while traveling to their destination ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pluto",
          distance: 49452,
          description:
            "Long before it was demoted to the status of a dwarf planet, Pluto stood out in many regards.",
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
