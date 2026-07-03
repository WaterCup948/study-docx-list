const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.get("/home", (req, res) => {
  // res.send("你好世界");
  // res.status(201);
  res.set("Content-Type", "text/html");
  res.header("Cache-Control", "no-cache");
  console.log(res.get("content-type"));
  res.send({ name: "小明", age: 18 });
});
app.get("/redir", (req, res) => {
  res.redirect("/home");
});
app.get("/img", (req, res) => {
  // 发送图片文件，自动设置正确的Content-Type
  res.sendFile(path.join(__dirname, "/image.jpeg"));
});
app.get("/download", (req, res) => {
  //第一个参数，图片地址
  //第二个参数, 图片重命名
  res.download(path.join(__dirname, "/image.jpeg"), "测试图片", (err) => {
    if (err) {
      res.status(404).send("文件不存在");
    } else {
      console.log("下载成功");
    }
  });
});
app.get("/api/users", (req, res) => {
  console.log(req.query); // { name: 'John', age:'30' }
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Name: ${name}, Age: ${age}`); //方法可以链式调用
});
app.get("/api/users/:id", (req, res) => {
  console.log(req.params); // { id: '123' }
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
