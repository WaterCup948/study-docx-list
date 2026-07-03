const express = require("express");
const app = express(); //生成express实例，无需手动创建 HTTP 服务器
const PORT = 3000;
//直接使用 app.get() 定义路由，无需手动检查 req.method 和 req.url
app.get("/", (req, res) => {
  //在 Express 中，不需要显式调用 res.end()，
  // 因为 Express 的响应方法（如 res.send()、res.json()、res.render() 等）会自动结束响应。
  //   res.send("Hello World!");
  res.send("你好世界"); // 这里改成中文也不会乱码，因为Express会自动设置响应头
});
app.listen(PORT, () => {
  // 会调用createServer自动创建服务器
  console.log(`Server running on http://localhost:${PORT}`);
});
