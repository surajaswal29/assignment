const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: [true, "Please enter product name"],
    },
    qtyPerUnit: {
      type: Number,
      required: [true, "Please enter product Quantity"],
      default: 1,
    },
    unitPrice: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    unitInStock: {
      type: Number,
      required: [true, "please enter product stock."],
      default: 1,
    },
    discontinued: {
      type: Boolean,
      default: 'no',
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});
  
module.exports = mongoose.model("Product", productSchema);