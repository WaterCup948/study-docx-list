const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((request, response) => {
  const imagePath = path.join(__dirname, "index.html");
  response.setHeader("Content-Type", "text/html; charset=UTF-8");
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      // 如果读取失败，返回错误信息
      response.statusCode = 404;
      response.end("html文档未找到");
      return;
    } // 发送图片数据
    response.end(data);
  });
});
// 启动服务器并监听指定端口
server.listen(3000, () => {
  console.log(`Server is running athttp://localhost:3000`);
});
