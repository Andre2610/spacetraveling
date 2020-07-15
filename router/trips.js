const { Router } = require("express");
const Trip = require("../models").trip;
const Planet = require("../models").planet;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getAll = await Trip.findAll({
      include: Planet,
    });
    if (!getAll) {
      res.status(404).send("Something went wrong, that's alot of damage");
    } else {
      res.status(200).send(getAll);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
