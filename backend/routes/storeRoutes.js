const router = require("express").Router();
const {
  addToCart,
  removeFromCart,
  addToWishlist,
} = require("../controllers/storeController");

router.put("/addToCart/", addToCart);
router.delete("/removeFromCart/", removeFromCart);
router.post("/addToWishlist/", addToWishlist);

module.exports = router;
