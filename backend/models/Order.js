const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      quantity: Number,
      subTotal: Number,
    },
  ],
  total: { type: Number },
});
module.exports = mongoose.model("order", orderSchema);
