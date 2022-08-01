//POST - Register
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.create({
      email,
      username,
      password,
      confirmed: false,
    });

    const confirmedToken = user.getConfirmedToken();
    await user.save();

    const confirmUrl = `http://localhost:3000/confirmRegistration/${confirmedToken}`;

    const message = `<h1>You have create a new account</h1>
    <p>Please go to this link to confirm your registration</p>
    <a href=${confirmUrl} clicktracking=off/>${confirmUrl}</a>`;

    try {
      sendEmail({
        to: email,
        subject: "Confirm Registration",
        text: message,
      });
      res.status(200).json({ success: true, data: "Email was sent" });
    } catch (error) {
      user.confirmRegistrationExpire = undefined;
      await user.save();

      return new ErrorResponm();
    }
  } catch (error) {
    next(error);
  }
};
//GET - Confirmation
exports.confirmRegistration = (req, res, next) => {
  console.log("Register");
};
//LOST - Login
exports.login = (req, res, next) => {
  console.log("Register");
};
//POST - Forgot Password
exports.forgotPassword = (req, res, next) => {
  console.log("Register");
};
//PUT - Reset Password
exports.resetPassword = (req, res, next) => {
  console.log("Register");
};
