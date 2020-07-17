require("dotenv").config();

module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 5000,
  API_URL: process.env.API_URL,
  BACKEND_API: process.env.BACKEND_API,
  AUTH_USER: process.env.AUTH_USER,
  AUTH_PASS: process.env.AUTH_PASS,
  STRIPE_KEY: process.env.STRIPE_KEY,
  AUTH_USER_OUTLOOK: process.env.AUTH_USER_OUTLOOK,
  AUTH_PASS_OUTLOOK: process.env.AUTH_PASS_OUTLOOK,
  ISADMINCODE: process.env.ISADMINCODE,
};

// a small change somewhere
