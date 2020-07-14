const User = require("../models").user;
const Trip = require("../models").trip;
const Post = require("../models").post;
const Picture = require("../models").picture;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  //   console.log("Do I get called?");
  try {
    const authHeader =
      req.headers.authorization && req.headers.authorization.split(" ");
    // console.log("What is in my header", authHeader);
    if (authHeader && authHeader[0] === "Bearer" && authHeader[1]) {
      try {
        const data = toData(authHeader[1]);
        // console.log("What is in data", data);
        const user = await User.findByPk(data.userId, {
          include: {
            model: Trip,
            include: { model: Post, include: { model: Picture } },
          },
        });
        // console.log("Who is the user", user);
        if (!user) {
          next();
        } else {
          req.user = user;
          next();
        }
      } catch (e) {
        res.status(400).send("Invalid JWT token");
      }
    } else {
      res.status(401).send({ message: "Please supply valid credentials" });
    }
  } catch (e) {
    next(e);
  }
}

module.exports = auth;
