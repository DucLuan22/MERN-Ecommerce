const router = require("express").Router();
const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  createOrder,
} = require("../controllers/storeController");

router.put("/addToCart/", addToCart);
router.delete("/removeFromCart/", removeFromCart);
router.post("/addToWishlist/", addToWishlist);
router.delete("/removeFromWishlist/", removeFromWishlist);
router.post("/checkout", createOrder);
module.exports = router;
