const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String,
        required: [true, "Please enter Category name"],
      },
});

module.exports = mongoose.model("Category", categorySchema);