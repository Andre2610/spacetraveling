const { Router } = require("express");

const User = require("../models").user;
const Planet = require("../models").planet;
const Trip = require("../models").trip;

const router = new Router();

router.get("/", async (req, res, next) => {
  console.log("DO I GET HERE?", Planet);
  try {
    const getPlanet = await Planet.findAll();
    if (!getPlanet) {
      console.log("How about here?! inside IF block1");
      res.status(404).send("planet not found");
    } else {
      res.status(200).send(getPlanet);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
