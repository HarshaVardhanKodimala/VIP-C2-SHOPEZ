const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductsByCategory,
  getProductsPagination,
  seedProducts,
} = require("../controllers/productController");
router.post("/", addProduct);
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get(
"/page",
getProductsPagination
);

router.post(
"/seed",
seedProducts
);
router.post(
"/seed",
seedProducts
);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;