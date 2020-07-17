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
    travelClass,
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

    const getBookingId = await Booking.findOne({
      where: { id: newBooking.id },
    });
    console.log("WHAT IS MY BOOKINGID?");

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
      text: `BOOKING CONFIRMATION:Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline.

      This is your booking confirmation for ${planetId} and your BOARDINGPASS.

      Your flight to ${planetId} departs on ${departingDate}.

      You have chosen for ${travelClass}, should you wish to upgrade your seating please visit Seat-Upgrade
      
      IMPORTANT:Please bring a printed copy of this document to the check-in as it functions as your BOARDING PASS.
      
      
      `,
      html: `<h3>BOOKING CONFIRMATION:</h3> <h2>Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline</h2>
      <p>
      This is your booking confirmation for ${planetId} and your <Strong>Boardingpass</Strong>.
      <br/>
      Your flight to ${planetId} departs on ${departingDate}.
      <br/>
      You have chosen for ${travelClass} seating, should you wish to upgrade - please visit <a>Upgrade-Seating</a>
      <br/>
      <h3>IMPORTANT:</h3><p>Please bring a printed copy of this document to the check-in as it functions as youre <strong>Boarding Pass</strong></p>
      
      </p>`,
    };

    // first Name
    // last Name
    // add bookingId
    // User
    // Travel Class
    // Origin = Earth
    // Destination = dynamic
    // Date of departure

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
