const Product = require("../models/Product");
const Order = require("../models/Order");

exports.getProductSales = async (req, res, next) => {
  try {
    const data = await Order.find({});
    if (!data) {
      return next(new ErrorResponse("Can't find any Order"), 400);
    }
    const allProducts = [].concat(...data.map((order) => order.products));

    const uniqueItems = {};

    // Loop through the orderedList and add up the quantity and subTotal for each unique product_id
    allProducts.forEach((item) => {
      if (!uniqueItems[item.product_id]) {
        uniqueItems[item.product_id] = {
          product_id: item.product_id,
          quantity: item.quantity,
          subTotal: item.subTotal,
        };
      } else {
        uniqueItems[item.product_id].quantity += item.quantity;
        uniqueItems[item.product_id].subTotal += item.subTotal;
      }
    });

    let totalOrderedList = [];

    // Loop through the uniqueItems object and format each item as a new object with a totalOrdered field
    for (const item of Object.values(uniqueItems)) {
      const product = await Product.findById(item.product_id).then((data) => {
        totalOrderedList.push({
          product_id: item.product_id,
          quantity: item.quantity,
          subTotal: item.subTotal,
          totalQuantity: item.quantity,
          totalAmountOrdered: item.quantity * item.subTotal,
          name: data.name,
          img: data.img,
          price: data.price,
        });
      });
    }
    totalOrderedList.sort((a, b) => b.totalQuantity - a.totalQuantity);
    totalOrderedList = totalOrderedList.slice(0, 5);

    res.status(200).json({ success: true, orderedList: totalOrderedList });
  } catch (err) {
    next(err);
  }
};

exports.getYearlyOrders = async (req, res, next) => {
  try {
    const startDate = new Date();
    const endDate = new Date();
    const currentDate = new Date();

    const results = {};

    // Iterate through each month of the year
    for (let i = 0; i <= 12; i++) {
      let sum = 0;
      // Set the start date to the first day of the month
      startDate.setFullYear(currentDate.getFullYear(), i, 1);
      startDate.setHours(0, 0, 0, 0);

      // Set the end date to the last day of the month
      endDate.setFullYear(currentDate.getFullYear(), i + 1, 0);
      endDate.setHours(23, 59, 59, 999);

      // Query for the items within the date range
      const data = await Order.find({
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      });

      data.forEach((item) => {
        item.products.forEach((product) => {
          sum += product.subTotal;
        });
      });

      // Add the items to the results object with the month as the key
      results[i] = {
        numberOfSales: data.length,
        totalRevenue: sum,
      };
    }
    res.status(200).json({
      success: true,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      results,
    });
  } catch (err) {
    next(err);
  }
};

exports.getMonthlyOrders = async (req, res, next) => {
  try {
    const startDate = new Date();
    const endDate = new Date();
    const currentDate = new Date();
    const results = {};
    // Iterate through each day of the month
    for (
      let i = 1;
      i <=
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();
      i++
    ) {
      let sum = 0;
      // Set the start date to the beginning of the day
      startDate.setFullYear(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      startDate.setHours(0, 0, 0, 0);

      // Set the end date to the end of the day
      endDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), i);
      endDate.setHours(23, 59, 59, 999);

      // Query for the items within the date range
      const data = await Order.find({
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      });

      data.forEach((item) => {
        item.products.forEach((product) => {
          sum += product.subTotal;
        });
      });

      // Add the items to the results object with the day as the key
      results[i] = {
        numberOfSales: data.length,
        totalRevenue: sum,
      };
    }
    res.status(200).json({
      success: true,
      currentMonth: getMonthName(currentDate.getMonth()),
      results,
    });
  } catch (err) {
    next(err);
  }
};

function getMonthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Subtract 1 from the monthNumber to get the correct index in the months array
  return months[monthNumber];
}
