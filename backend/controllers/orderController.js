const Order = require("../models/Order");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const createOrder = async (req, res, next) => {
  const { user_id, products, total } = req.body;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User haven't login", 400));
    }
    const order = Order.create({ ...req.body });
    user.orders.push(order._id);
    user.save();
  } catch (error) {
    next(error);
  }
};
