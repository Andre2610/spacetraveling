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

module.exports = router;
