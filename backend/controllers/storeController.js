const Product = require("../models/Product");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
exports.addToCart = async (req, res, next) => {
  const { user_id, quantity, product_id } = req.body;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User haven't login", 400));
    }
    const product = await Product.findById(product_id);
    if (!product) {
      return next(new ErrorResponse("Can't find product", 400));
    }

    const checkExist = await User.find({
      cart: {
        $elemMatch: { product_id },
      },
    });

    if (checkExist.length === 0 && typeof quantity === "undefined") {
      user.cart.push({ product_id: product._id, quantity: 1 });
      await user.save();
      res.status(200).json(user.cart);
      return user.cart;
    }

    if (checkExist.length === 0 && typeof quantity !== "undefined") {
      user.cart.push({ product_id: product._id, quantity: quantity });
      await user.save();
      res.status(200).json(user.cart);
      return user.cart;
    }

    if (checkExist.length > 0 && typeof quantity === "undefined") {
      user.cart.filter(
        (product) => product.product_id.toString() === product_id
      )[0].quantity += 1;
      user.save();
      res.status(200).json(user.cart);
      return user.cart;
    }

    user.cart.filter(
      (product) => product.product_id.toString() === product_id
    )[0].quantity = quantity;
    user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    next(error);
  }
};

exports.removeFromCart = async (req, res, next) => {
  const { product_id, user_id } = req.body;
  console.log(req);
  try {
    console.log(product_id);
    const user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User haven't login", 400));
    }
    const removeItem = user.cart.find(
      (product) => product.product_id.toString() === product_id
    );
    if (!removeItem) {
      return next(new ErrorResponse("Can't find product", 400));
    }

    user.cart = user.cart.filter(
      (product) => product.product_id.toString() !== product_id
    );
    user.save();
    res.status(200).json(removeItem);
  } catch (error) {
    next(error);
  }
};
