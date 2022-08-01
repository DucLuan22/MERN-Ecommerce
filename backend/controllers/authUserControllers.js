const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
//POST - Register
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
      user.confirmRegistrationToken = undefined;
      user.confirmRegistrationExpire = undefined;
      await user.save();
      return new ErrorResponse("Email couldn't be sent", 500);
    }
  } catch (error) {
    next(error);
  }
};

//GET - Confirmation
exports.confirmRegistration = async (req, res, next) => {
  const { confirmToken } = req.params;
  const confirmRegistrationToken = crypto
    .createHash("sha256")
    .update(confirmToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      confirmRegistrationToken,
      confirmRegistrationExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new Error("Invalid confirm Token", 400));
    }

    const jwtToken = user.getSignedToken();
    user.confirmRegistrationToken = undefined;
    user.confirmRegistrationExpire = undefined;
    user.confirmed = true;

    await user.save();
    res.status(200).json({
      success: true,
      data: "Successfully confirmed registration. You can now login to your account.",
      token: jwtToken,
    });
  } catch (error) {
    next(error);
  }
};
//LOST - Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("please provide an email and password"), 400);
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid email", 400));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid password", 404));
    }

    if (user.confirmed == false) {
      return next(new ErrorResponse("Please confirmed your account", 400));
    }

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

//POST - Forgot Password
exports.forgotPassword = (req, res, next) => {
  console.log("Register");
};
//PUT - Reset Password
exports.resetPassword = (req, res, next) => {
  console.log("Register");
};

const resendEmail = () => {};
