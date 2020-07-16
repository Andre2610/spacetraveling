const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { Router } = require("express");
const router = new Router();

const paymentIntent = await stripe.paymentIntent.create({
  amount: 4000,
  currency: "eur",
  metadata: { integration_check: "accept_a_payment" },
});

module.exports = router;
