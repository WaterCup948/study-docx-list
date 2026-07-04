const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(cookieParser());
// 1. 基本用法 - 设置简单的 cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "张三");
  res.send("Cookie 已设置");
});
// 2. 设置带选项的 cookie
app.get("/set-cookie-options", (req, res) => {
  res.cookie("user", "李四", {
    maxAge: 900000, // cookie 有效期（毫秒）
    httpOnly: true, // 只能通过 HTTP 访问
    secure: true, // 只在 HTTPS 连接中传输
    path: "/", // cookie 的路径
    domain: "localhost", // cookie 的域名
    signed: true, // 是否签名
  });
  res.send("带选项的 Cookie 已设置");
});
// 3. 设置多个 cookie
app.get("/set-multiple", (req, res) => {
  res.cookie("name", "王五");
  res.cookie("age", "25");
  res.cookie("city", "北京");
  res.send("多个 Cookie 已设置");
});
// 4. 清除 cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie 已清除");
});
// 5. 带过期时间的 cookie
app.get("/set-expires", (req, res) => {
  res.cookie("session", "abc123", {
    expires: new Date(Date.now() + 3600000), // 1小时后过期
  });
  res.send("带过期时间的 Cookie 已设置");
});
// 6. 读取 cookie 的示例路由
app.get("/read-cookie", (req, res) => {
  // 需要安装 cookie-parser 中间件才能读取 cookie
  const username = req.cookies.username;
  res.send(`读取到的 Cookie: ${username}`);
});
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
