
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, productController.addProduct);
router.get("/", auth, productController.getAllProducts);
router.put("/:id", auth, productController.updateProduct);
router.delete("/:id", auth, productController.deleteProduct);

router.get("/featured", auth, productController.getFeatured);
router.get("/price/:value", auth, productController.getByPrice);
router.get("/rating/:value", auth, productController.getByRating);

module.exports = router;
