const { Router } = require("express");
const Planet = require("../models").planet;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getPlanet = await Planet.findAll();
    if (!getPlanet) {
      res.status(404).send("planet not found");
    } else {
      res.status(200).send(getPlanet);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
