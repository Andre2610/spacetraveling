require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const jsonParser = express.json();
const authRouter = require("./router/auth");
const planetRouter = require("./router/planet");

app.use(cors());
app.use(jsonParser);
app.use("/auth", authRouter);
app.use("/planet", planetRouter);

app.listen(port, () => console.log("Listening to port", port));
