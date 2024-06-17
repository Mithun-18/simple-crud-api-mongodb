const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
