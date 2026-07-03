const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// 方法一：
function middleware(req, res, next) {
  // 对req和res进行处理
  console.log("触发中间件");
  next(); // 调用下一个中间件
}
app.use(middleware); // 注册中间件

// 方法二
app.use((req, res, next) => {
  // 对req和res进行处理
  console.log("触发中间件");
  next(); // 调用下一个中间件
}); // 注册中间件

// 单独路由中间件
app.use("/home", (req, res, next) => {
  console.log("触发中间件");
  next();
});

app.get("/home", (req, res) => {
  res.send({ name: "小明", age: 18 });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
