const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "pls enter the product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productsSchema);

module.exports = Product;
