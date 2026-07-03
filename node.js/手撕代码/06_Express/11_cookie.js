const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// 使用cookie-parser中间件
app.use(cookieParser());
// 设置一个简单的路由，用于设置Cookie
app.get("/setCookie", (req, res) => {
  // 使用cookie-parser中间件
  // 设置名为username的Cookie，值为John Doe
  res.cookie("username", "John Doe");

  // 不使用cookie-parser中间件
  // 直接设置 Set-Cookie 响应头
  res.setHeader("Set-Cookie", "username=JohnDoe"); // 或者设置多个 cookie
  res.setHeader("Set-Cookie", [
    "username=John Doe",
    "age=25; Max-Age=86400", // 一天后过期
    "theme=dark; HttpOnly", // 添加 HttpOnly 标记
  ]);

  res.send("Cookie set successfully");
});
// 设置一个路由，用于读取Cookie
app.get("/getCookie", (req, res) => {
  // 使用cookie-parser中间件
  // 读取名为username的Cookie
  const username = req.cookies.username;

  // 不使用cookie-parser中间件
  // 从请求头获取 cookie 字符串
  const cookieHeader = req.headers.cookie; // 手动解析 cookie 字符串
  const cookies = {};
  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      cookies[name] = value;
    });
  }
  const username = cookies.username;
  res.send(`The value of the cookie is:${username}`);
});
// 删除 cookie
app.get("/deleteCookie", (req, res) => {
  // 使用cookie-parser中间件
  res.clearCookie("username");

  // 不使用cookie-parser中间件
  // 通过设置过期时间为过去来删除 cookie
  res.setHeader("Set-Cookie", "username=; MaxAge=0");

  res.send("Cookie deleted successfully");
});

app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
