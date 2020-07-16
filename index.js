require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const jsonParser = express.json();
const authRouter = require("./router/auth");
const planetRouter = require("./router/planet");
const tripsRouter = require("./router/trips");
const userRouter = require("./router/user");
const paymentRouter = require("./router/payment");

//middleware
app.use(cors());
app.use(jsonParser);

//router
app.use("/auth", authRouter);
app.use("/trips", tripsRouter);
app.use("/planet", planetRouter);
app.use("/checkout", paymentRouter);

//test route
app.use("/user", userRouter);

app.listen(port, () => console.log("Listening to port", port));
