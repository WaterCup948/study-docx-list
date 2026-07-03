const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;
// 1. 普通中间件
app.use((req, res, next) => {
  console.log("请求时间:", new Date().toLocaleString());
  next();
});
// 2. 路由处理
app.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "欢迎来到首页",
    data: null,
  });
});
// 3. 同步错误示例
app.get("/sync-error", (req, res) => {
  // 方式一： 直接抛出错误，会被自动捕获
  console.log("同步错误示例"); //或者写a.b=1也是会报错
  throw new Error("同步错误示例");

  //  方式二：语法错误或者逻辑错误，自动被捕获
  a.b = 1;
});
// 4. 文件操作错误示例（异步）
app.get("/file-error", (req, res, next) => {
  // 使用回调函数读取文件
  fs.readFile("not-exist.txt", (err, data) => {
    if (err) {
      // 方法一：错误
      // 由于是异步的，故错误执行的时候，错误中间件已经被执行了
      // 所以无法再次执行
      // throw new Error('同步错误示例');

      // 方法二：手动执行错误
      next(err);
      return;
    }
    res.json({
      code: 200,
      message: "文件读取成功",
      data: data.toString(),
    });
  });
});
// 5. 404处理 -- 没有找到的路由会走到该中间件
// 中间还能抛出错误，走到 错误处理中间件
app.use((req, res, next) => {
  const err = new Error("页面不存在");
  err.status = 404;
  next(err);
});
// 6. 错误处理中间件
app.use((err, req, res, next) => {
  console.error("错误:", err.message);
  const status = err.status || 500;
  res.status(status).json({
    code: status,
    message: err.message,
    data: null,
  });
});
// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在http://localhost:${port}`);
});
