const { Router } = require("express");
const Trip = require("../models").trip;
const Planet = require("../models").planet;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) {
      res.status(404).send("User not found");
    } else {
      res.json(allUsers);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
