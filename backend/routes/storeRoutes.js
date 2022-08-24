const router = require("express").Router();
const { addToCart } = require("../controllers/storeController");

router.put("/addToCart/:product_id", addToCart);

module.exports = router;
