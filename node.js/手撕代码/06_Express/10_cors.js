const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors"); // 引入CORS模块
// 使用CORS中间件，允许所有域名的跨域请求
app.use(cors());
// app.use(
//   cors({
//     origin: "http://your-vue-app-domain.com", // 只允许特定域名
//     methods: "GET,POST", // 只允许特定HTTP方法
//     credentials: true, // 允许携带cookie等凭证
//   })
// );
app.use("/stat", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.json({
    message: "响应成功",
  });
});

app.listen(3000, () => {
  console.log("服务运行在3000端口上了");
});
