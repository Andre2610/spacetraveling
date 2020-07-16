const { Router } = require("express");
const Stripe = require("stripe");
const router = new Router();
const stripe = new Stripe(
  "sk_test_51H4q6NJAyfM1fq6szjaKaKt6HxhxR8m0tFOdmWHoJIltNPx9W7A1uktKLwwMK5p1jAFRagf3BffwK8fg28aoNEDv00QdAI2UTz"
);

router.post("/", async (req, res, next) => {
  const {
    id,
    amount,
    tripId,
    departingDate,
    planetId,
    email,
    cardholder,
  } = req.body;
  if (!id || !amount) {
    res.status(402).send("missing parameters!");
  }

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      description: "booking ticket to your next space adventure",
      payment_method: id,
      payment_method_types: ["card"],
      confirm: true,
      receipt_email: email,
    });

    console.log(payment);

    // todo:
    // populate the booking table
    //- it has the userId / tripID -> get this via the dispatch call in front-end
    //nodemailer email with ticket
    //

    return res.status(200).json({ confirmation: "purchace was success" });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
