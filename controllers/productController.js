const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

// create product
exports.createProductAndCategory = async(req,res,next)=>{

    let category;

    if(req.body.categoryName){
        category = await Category.create(req.body);
        req.body.categoryId = category.id;
    }else{
        category = "This product has no Category";
    }

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product,
        category
    })
}

//Get Product
exports.getProductDetails = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next("Product Not Found!");
    }

    let productCategory;

    if(product.categoryId){
        productCategory = await Category.findById(product.categoryId);
    }

    res.status(200).json({
        success: true,
        product,
        productCategory
    });
}

// Get All Product
exports.getAllProduct = async(req,res,next)=>{
    const product = await Product.find();

    if (!product) {
        return next("Product Not Found!");
    }
    
    res.status(200).json({
        success: true,
        product
    });
}

// Update product
exports.updateProduct = async (req, res, next) => {

// checking the availability of the product
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next("Product Not Found");
  }

//if product exist then update
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message:"Product Updated Successfully",
      product
    });
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next("Product Not Found");
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted!",
  });
 };