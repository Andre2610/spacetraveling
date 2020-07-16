const { Router } = require("express");
const Trip = require("../models").trip;
const Planet = require("../models").planet;
const uuid = require("uuid");
const { default: Stripe } = require("stripe");

const router = new Router();

router.post("/", async (req, res, next) => {
  //info I want passed on from the front-end
  const { product, token } = req.body;
  console.log("what is my PRODUCT", product);
  console.log("what is my PRICE", product.price);

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charge.create({
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase of ${product.name}`,
      });
    })
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});

module.exports = router;
