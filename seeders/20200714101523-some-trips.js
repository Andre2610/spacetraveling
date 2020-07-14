"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trips",
      [
        {
          departingDate: "13/04/2020",
          price: 14999,
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "22/06/2020",
          price: 14999,
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "20/10/2020",
          price: 12999,
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "20/04/2020",
          price: 12799,
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "19/10/2020",
          price: 15999,
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "01/05/2021",
          price: 13999,
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "30/10/2020",
          price: 17999,
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "20/04/2021",
          price: 15999,
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "09/12/2021",
          price: 14999,
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "12/11/2020",
          price: 18999,
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "13/05/2021",
          price: 16999,
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "15/07/2022",
          price: 15999,
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "13/08/2020",
          price: 17999,
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "13/11/2020",
          price: 19999,
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "05/02/2021",
          price: 19999,
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "20/10/2021",
          price: 19999,
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "10/07/2020",
          price: 24999,
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "02/12/2020",
          price: 20999,
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "14/02/2021",
          price: 21999,
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "15/09/2021",
          price: 21999,
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "20/10/2021",
          price: 19999,
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "16/08/2020",
          price: 29999,
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "13/04/2021",
          price: 32999,
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departingDate: "26/10/2021",
          price: 34999,
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trips", null, {});
  },
};
