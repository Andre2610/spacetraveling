const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;

const router = new Router();

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName, title, about } = req.body.data;
  if (!email || !password || !firstName || !lastName) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      title,
      about,
    });
    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
