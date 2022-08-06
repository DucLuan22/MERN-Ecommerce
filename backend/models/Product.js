const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
