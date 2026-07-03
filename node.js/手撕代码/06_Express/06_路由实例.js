const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = express.Router();

function middleware(req, res, next) {
  console.log("中间件");
  next();
}
userRouter.use(middleware); // 注册为userRouter模块路由的中间件

userRouter.get("/username", (req, res) => {
  res.send("xiaoxiao");
});
userRouter.post("/password", (req, res) => {
  res.send("123456");
});
app.use("/api", userRouter); // 将路由模块挂载到Express应用上

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
