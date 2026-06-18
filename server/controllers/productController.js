const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      stock,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock,
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const products = await Product.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProductsByCategory = async (
  req,
  res
) => {
  try {
    const products = await Product.find({
      category: req.params.category,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProductsPagination = async (
req,
res
) => {
try {

const page =
Number(req.query.page) || 1;

const limit =
Number(req.query.limit) || 5;

const skip =
(page - 1) * limit;

const products =
await Product.find()
.skip(skip)
.limit(limit);

res.status(200).json(products);

} catch (error) {

res.status(500).json({
message:
error.message
});

}
};
const seedProducts = async (req, res) => {
  try {

    const sampleProducts = [


{

name:"iPhone 15",

price:79999,

category:"Mobiles",

stock:20,

image:
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"

},

{

name:"Samsung S24",

price:69999,

category:"Mobiles",

stock:10,

image:
"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"

},

{

name:"HP Laptop",

price:55999,

category:"Electronics",

stock:8,

image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"

}

];
    

    await Product.insertMany(
      sampleProducts
    );

    res.json({
      message:
        "Products Added"
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
};
module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductsByCategory,
  getProductsPagination,
  seedProducts,
};