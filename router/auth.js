const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;

const router = new Router();

router.post("/signup", async (req, res) => {
  //   const { email, password, firstName, lastName } = req.body.data;
  const { email, password, firstName, lastName } = req.body;
  console.log("my body", req.body);
  if (!email || !password || !firstName || !lastName) {
    return res
      .status(400)
      .send("Please provide an email, password, your first and last name");
  }

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
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

router.post("/login", async (req, res, next) => {
  // login logic
  try {
    const { email, password } = req.body;
    if (!email || !password || email === " " || password === " ") {
      res
        .status(400)
        .send({ message: "Please supply a valid email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: {
        model: Trip,
        include: { model: Post, include: { model: Picture } },
      },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    res.send({ token, ...user.dataValues });
  } catch (e) {
    next(e);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
