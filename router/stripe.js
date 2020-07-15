const { Router } = require("express");
const Trip = require("../models").trip;
const Planet = require("../models").planet;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
