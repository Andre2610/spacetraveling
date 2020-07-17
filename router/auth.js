const { Router } = require("express");
const { toJWT, emailToken, validatingEmail } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const {
  SALT_ROUNDS,
  API_URL,
  BACKEND_API,
  AUTH_USER,
  AUTH_PASS,
  ISADMINCODE,
} = require("../config/constants");
const jwt = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  // login logic
  try {
    const { email, password } = req.body.credentials;
    if (!email || !password || email === " " || password === " ") {
      res
        .status(400)
        .send({ message: "Please supply a valid email and password" });
    }

    const user = await User.findOne({
      where: { email },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(403).send({
        message: "User with that email not found or password incorrect",
      });
    }
    if (!user.verified) {
      return res.status(403).send({
        message:
          "You must verify your account before logging in. Please check your email.",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    res.send({ token, ...user.dataValues });
  } catch (e) {
    next(e);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

router.post("/signup", async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    isAdmin,
    isAdminCode,
  } = req.body.signUpcredentials;
  //   const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    return res
      .status(400)
      .send("Please provide an email, password, your first and last name");
  }
  console.log("my credentials", req.body.signUpcredentials);
  if (isAdmin && isAdminCode !== ISADMINCODE) {
    console.log("got in here?");
    return res.status(400).json("Not allowed to create an admin account");
  }

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      verified: false,
      isAdmin,
    });

    const eToken = emailToken({ id: newUser.id });
    const url = `${BACKEND_API}/auth/confirmation/${eToken}`;

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: `${AUTH_USER}`,
        pass: `${AUTH_PASS}`,
      },
    });

    const confirmationEmailTemplate = {
      from: `${AUTH_USER}`, // sender address
      to: `${email}`, // list of receivers
      subject: `Hello, ${firstName}`, // Subject line
      text: `Thank you for registering an account with space travel agency. 
      Please confirm your email by clicking the following link:${url}`, // plain text body
      html: `<h2>Thank you for registering an account with space travel agency.</h2>
      <p>Please confirm your email by clicking the following link:<a href=${url}>${url}</a></p>`, // html body
    };

    transporter.sendMail(confirmationEmailTemplate, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent!!!");
      }
    });

    res.status(201).json("it worked");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/confirmation/:token", async (req, res) => {
  try {
    console.log("do I get here?");
    const { id } = validatingEmail(req.params.token);
    console.log("my verified data", id);
    const updatedUser = await User.update(
      { verified: true },
      { where: { id } }
    );
    console.log("final user", updatedUser);
  } catch (e) {
    res.send("error");
  }

  return res.redirect("http://localhost:3000");
});

module.exports = router;
