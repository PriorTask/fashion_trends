// const express = require("express");
const getProductController = require("../controllers/products/getProductController"); // 2 dots ka mtlb 2 steps peeche jaana locn path mei
const express = require("express");
const router = express.Router();


router.get("/", getProductController);
router.get("/category/:category", getProductController);
router.get("/name/:name", getProductController);
router.get("/id/:id", getProductController);
router.get("/random", getProductController);
router.get("/top-rated", getProductController);
router.get("/low-to-high", getProductController);
router.get("/high-to-low", getProductController);


module.exports = router;

