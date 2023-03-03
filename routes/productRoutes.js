const express = require("express");
const { createProductAndCategory, getProductDetails, getAllProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

// create product and category
router.route('/create').post(createProductAndCategory);

// get single product
router.route('/read/:id').get(getProductDetails);

// get All product
router.route('/readAll').get(getAllProduct);

// update product
router.route('/update/:id').put(updateProduct);

// Delete product 
router.route('/delete/:id').delete(deleteProduct);

module.exports = router;