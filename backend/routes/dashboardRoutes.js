const express = require("express");
const router = express.Router();

const {
  getProductSales,
  getYearlyOrders,
  getMonthlyOrders,
} = require("../controllers/dashboardController");

router.get("/getTopSaleNumbers", getProductSales);
router.get("/getYearlyOrders", getYearlyOrders);
router.get("/getMonthlyOrders", getMonthlyOrders);
module.exports = router;
