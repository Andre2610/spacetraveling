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
    planetName,
    email,
    cardholder,
    userId,
    travelClass,
    firstName,
    lastName,
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

    // populate the booking table
    const newBooking = await Booking.create({
      tripId: tripId,
      userId: userId,
    });

    const getBookingId = await Booking.findOne({
      where: { id: newBooking.id },
    });

    //nodemailer
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: `${AUTH_USER}`,
        pass: `${AUTH_PASS}`,
      },
    });

    const confirmationAndticketEmailTemplate = {
      from: `${AUTH_USER}`,
      to: `${email}`,
      subject: `Space Travel inc. payment confirmation and boarding pass`,
      text: `BOOKING CONFIRMATION:Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline.
      This is your booking confirmation for ${planetName} and your BOARDINGPASS.

      Your flight to ${planetName} departs on ${departingDate}.
     
      You have chosen for ${travelClass}, should you wish to upgrade your seating please visit Seat-Upgrade
      
      IMPORTANT:Please bring a printed copy of this document to the check-in as it functions as your BOARDING PASS.
      `,
      html: `

      <div   
        style="
          padding: 5px 5px 5px 5px"
          border="0"
          width="600"
      >
      <img src="https://cdn.discordapp.com/attachments/718425463059513374/733635534924021760/bannermail.png" width="100%"/>
      
      <h2>Dear valued customer, thank you for choosing Space Travel inc as your off-planet spaceline</h2>
      <p>
      This is your booking confirmation for ${planetName} and your <Strong>Boardingpass</Strong>.
      </p>
      <p>
      Your flight to ${planetName} departs on ${departingDate}.
      </p>
      <p>
      You have chosen for ${travelClass} seating, should you wish to upgrade - please visit <a href='www.google.com'>Upgrade-Seating</a>
      </p>
      <h3>IMPORTANT:</h3>
      <p>Please bring a printed copy of this document to the check-in as it functions as youre <strong>Boarding Pass</strong></p>
      
      </div>
      <table
      style="
        padding: 5px 5px 5px 5px;
        border: 2px solid #aa0d00;
        border-radius: 5px;
      "
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="600"
      >
      <tr>
      <td align="left" bgcolor="#ffffff" style="padding: 0 0 0 0;">
        <img src="https://cdn.discordapp.com/attachments/718425463059513374/733652425617178634/header.png" alt="Header" style="display: block;" />
      </td>
    </tr>
    <tr>
      <td height="40px" style="display: block; padding: 5px 5px 5px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Booking ID: <span style="color: #aa0d00;">${getBookingId.id}</span>
        </h3>
      </td>
      <td height="40px" style="display: block; padding: 5px 5px 5px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Class: <span style="color: #aa0d00;">${travelClass}</span>
        </h3>
      </td>
    </tr>
    <tr>
      <td height="40px" style="display: block; padding: 5px 5px 10px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Name: <span style="color: #aa0d00;">${firstName}</span>
        </h3>
      </td>
      <td height="40px" style="display: block; padding: 5px 5px 10px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Lastname: <span style="color: #aa0d00;"> ${lastName}</span>
        </h3>
      </td>
    </tr>
    <tr>
      <td height="40px" style="display: block; padding: 5px 5px 10px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Origin: <span style="color: #aa0d00;">Earth</span>
        </h3>
      </td>
      <td height="40px" style="display: block; padding: 5px 5px 10px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Destination: <span style="color: #aa0d00;">${planetName}</span>
        </h3>
      </td>
    </tr>
    <tr>
      <td height="40px" style="display: block; padding: 5px 5px 10px 20px;">
        <h3 style="font-family: 'Lato', sans-serif;">
          Date of departure:
          <span style="color: #aa0d00;">${departingDate}</span>
        </h3>
      </td>
    </tr>
    <tr
      height="10px"
      style="margin: 20px 0 0 0; display: block; background-color: #aa0d00;"
    >
      <td></td>
    </tr>
    <tr align="center">
      <td
        align="center"
        width="300px"
        style="
          background-color: rgb(255, 208, 0);
          display: block;
          margin: 20px 0 20px 0;
          padding: 20px 20px 20px 20px;
        "
      >
        <img src="https://cdn.discordapp.com/attachments/718425463059513374/733652429395984444/qrcode.png" alt="Header" style="display: block;" />
      </td>
    </tr>
    <tr>
      <td
        align="center"
        bgcolor="#aa0d00"
        height="60px"
        style="color: #ffffff; display: block; padding: 5px 5px 5px 20px;"
      >
        <h3 style="font-family: 'Lato', sans-serif;">
          © 2020 Space Travel Inc.
        </h3>
      </td>
    </tr>
      </table>
      `,
    };

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
