const router = require("express").Router();
const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/storeController");

router.put("/addToCart/", addToCart);
router.delete("/removeFromCart/", removeFromCart);
router.post("/addToWishlist/", addToWishlist);
router.delete("/removeFromWishlist/", removeFromWishlist);
module.exports = router;
