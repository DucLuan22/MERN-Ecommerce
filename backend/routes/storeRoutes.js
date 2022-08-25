const router = require("express").Router();
const { addToCart } = require("../controllers/storeController");

router.put("/addToCart/", addToCart);

module.exports = router;
