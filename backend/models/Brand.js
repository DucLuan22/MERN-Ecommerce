const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  brandName: { type: String, required: true },
  products: [{ product_id: mongoose.Schema.Types.ObjectId }],
});

module.exports = brandSchema;
