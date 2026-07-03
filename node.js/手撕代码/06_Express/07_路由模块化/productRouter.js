// productRouter.js
const express = require("express");
const router = express.Router();
router.get("/username", (req, res) => {
  res.send("/product/username");
});
router.post("/password", (req, res) => {
  res.send("/product/password");
});
module.exports = router;
