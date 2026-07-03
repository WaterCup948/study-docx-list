const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;
// 访问日志
app.use((req, res, next) => {
  req.aaa = "123"; // 添加属性
  const log = `${req.method}-${req.url}-${new Date().toLocaleString()}\n`;
  fs.appendFile(path.join(__dirname, "record.txt"), log, (err) => {
    if (err) {
      console.error("写入日志失败");
    }
  });
  next();
});

app.get("/home", (req, res) => {
  console.log(req.aaa);
  res.send({ name: "小明", age: 18 });
});

// 权限判断
app.use("/admin", (req, res, next) => {
  const token = req.headers.authorization;
  if (token === "123456") {
    next();
  } else {
    res.status(401).send("您的权限不足");
  }
});

app.get("/admin", (req, res) => {
  res.send("Hello Word");
});

function authorization(req, res, next) {
  console.log("中间件");
  next();
}

app.get("/user", authorization, (req, res) => {
  res.send("Hello Word");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
