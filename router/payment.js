const { Router } = require("express");
const Stripe = require("stripe");
const router = new Router();
const stripe = new Stripe(
  "sk_test_51H4q6NJAyfM1fq6szjaKaKt6HxhxR8m0tFOdmWHoJIltNPx9W7A1uktKLwwMK5p1jAFRagf3BffwK8fg28aoNEDv00QdAI2UTz"
);
const Booking = require("../models").booking;
const nodemailer = require("nodemailer");

const { AUTH_USER, AUTH_PASS } = require("../config/constants");

router.post("/", async (req, res, next) => {
  const {
    id,
    amount,
    tripId,
    departingDate,
    planetId,
    email,
    userId,
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

    // populate the booking table
    const newBooking = await Booking.create({
      tripId: tripId,
      userId: userId,
    });

    //nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: `${AUTH_USER}`,
        pass: `${AUTH_PASS}`,
      },
    });
    console.log("WHATS FROM USER", AUTH_USER);
    console.log("WHAT IS TO USER", email);
    const confirmationAndticketEmailTemplate = {
      from: `${AUTH_USER}`,
      to: `${email}`,
      subject: `Space Travel inc. payment confirmation and boarding pass`,
      text: `Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline.
      ...`,
      html: `<h2>Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline</h2>
      <p>...</p>`,
    };
    console.log(
      "WAHT IS CONFIRMATIONANDTICKETEMAIL",
      confirmationAndticketEmailTemplate
    );
    transporter.sendMail(confirmationAndticketEmailTemplate, function (
      err,
      data
    ) {
      if (err) {
        console.log("error Occurs");
      } else {
        console.log("email send!");
      }
    });

    return res.status(200).json({ confirmation: "purchace was success" });
  } catch (e) {
    console.log(e);
  }

  //nodemailer email with ticket
  //
});

module.exports = router;
