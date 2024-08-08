// const express = require("express");
const rootController = require("../controllers/rootController");
// 2 dots ka mtlb 2 steps peeche jaana locn path mei
const express = require("express");
const router = express.Router();
router.get("/", rootController);
module.exports = router;