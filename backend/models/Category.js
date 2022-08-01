const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: [{ type: mongoose.Schema.Types.ObjectId, ref: "brand" }],
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
});

module.exports = mongoose.model("category", categorySchema);
