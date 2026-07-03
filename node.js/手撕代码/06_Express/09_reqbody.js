const express = require("express");
const app = express();
const port = 3000;
// 使用json中间件
app.use(express.json());
app.post("/api/user", (req, res) => {
  console.log(33, req.body); // 自动解析的JSON数据
  res.json({
    received: req.body,
  });
});

// 使用urlencoded中间件
//extended: true 允许解析复杂的对象和数组
app.use(express.urlencoded({ extended: true }));
app.post("/form", (req, res) => {
  console.log(req.body); // 解析的表单数据
  res.send(
    `<h1>表单提交成功</h1><p>用户名: ${req.body.username}</p><p>密码: ${req.body.password}</p>`
  );
});

// 创建public目录并放入index.html和style.css和image.jpeg
// 方式一：http://127.0.0.1/image.jpeg
//        http://127.0.0.1/index.html
//        http://127.0.0.1/style.css
app.use(express.static(path.join(__dirname, "public")));
// 方式二：带前缀
// http://127.0.0.1/static/image.jpeg
// app.use("/static", express.static(path.join(__dirname, "public")));

// 提供API接口
app.get("/api", (req, res) => {
  res.json({ message: "API响应" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
