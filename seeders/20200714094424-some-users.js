"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "a@a.com",
          verified: true,
          isAdmin: true,
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cosme",
          lastName: "Fulanito",
          email: "Email@muchoemail.com",
          verified: true,
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Foo",
          lastName: "Bar",
          email: "fubar@fubar.com",
          verified: false,
          isAdmin: false,
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Esmee",
          lastName: "fluggal",
          email: "fu@db.com",
          verified: false,
          isAdmin: false,
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
