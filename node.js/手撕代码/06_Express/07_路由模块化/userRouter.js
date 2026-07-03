// userRouter.js
const express = require("express");
const router = express.Router();
router.get("/username", (req, res) => {
  res.send("/user/username");
});
router.post("/password", (req, res) => {
  res.send("/user/password");
});
module.exports = router;
