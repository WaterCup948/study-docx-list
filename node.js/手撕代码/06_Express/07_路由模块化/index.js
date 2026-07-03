// index.js
const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");

app.use("/user", userRouter);
// http://127.0.0.1:3000/user/username
// http://127.0.0.1:3000/user/password

app.use("/productor", productRouter);
// http://127.0.0.1:3000/product/username
// http://127.0.0.1:3000/product/password

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
