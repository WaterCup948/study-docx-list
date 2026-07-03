const express = require("express");
const app = express();
const PORT = 3000;
// 1. 首页路由
app.get("/", (req, res) => {
  res.send("欢迎访问首页");
});
// 2. 关于页面路由
app.get("/about", (req, res) => {
  res.send("这是关于页面");
});
// 3. 带参数的路由
app.get("/user/:id", (req, res) => {
  res.send(`用户ID是: ${req.params.id}`);
});
// 4. 带查询参数的路由
app.get("/search", (req, res) => {
  const keyword = req.query.keyword || "未提供关键词";
  res.send(`搜索关键词: ${keyword}`);
});
// 5. 处理不同HTTP方法的路由
// GET 请求 - 获取资源
app.get("/api/users", (req, res) => {
  res.send("获取用户列表");
});
// POST 请求 - 创建新资源
app.post("/api/users", (req, res) => {
  res.send("创建新用户");
});
// PUT 请求 - 更新资源
app.put("/api/users/:id", (req, res) => {
  res.send(`更新用户 ${req.params.id} 的信息`);
});
// PATCH 请求 - 部分更新资源
app.patch("/api/users/:id", (req, res) => {
  res.send(`部分更新用户 ${req.params.id} 的信息`);
});
// DELETE 请求 - 删除资源
app.delete("/api/users/:id", (req, res) => {
  res.send(`删除用户 ${req.params.id}`);
});
// OPTIONS 请求 - 获取服务器支持的HTTP方法
app.options("/api/users", (req, res) => {
  res.send("支持的HTTP方法: GET, POST, PUT, PATCH,DELETE");
});
// HEAD 请求 - 获取响应头信息
app.head("/api/users", (req, res) => {
  res.send(); // HEAD请求不需要响应体
});
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
app.all("/maintenance", (req, res) => {
  res.send("系统维护中，请稍后再试");
});
