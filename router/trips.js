const { Router } = require("express");
const Trip = require("../models").trip;
const Planet = require("../models").planet;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allTrips = await Trip.findAll();
    if (!allTrips) {
      res.status(404).send("User not found");
    } else {
      res.json(allTrips);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const getAll = await Trip.findAll({ include: Planet });
    if (!getAll) {
      res.status(404).send("shit not found");
    } else {
      res.status(200).send(getAll);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
