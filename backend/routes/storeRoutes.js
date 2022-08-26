const router = require("express").Router();
const { addToCart, removeFromCart } = require("../controllers/storeController");

router.put("/addToCart/", addToCart);
router.delete("/removeFromCart/", removeFromCart);

module.exports = router;
