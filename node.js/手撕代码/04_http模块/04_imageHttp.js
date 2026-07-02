const http = require("http");
const fs = require("fs");
const path = require("path");
// 创建 HTTP 服务器，默认监听本机，localhost或者127.0.0.1
const server = http.createServer((request, response) => {
  //默认这样写是处理所有形式请求的，包含get和post
  // 读取图片文件
  const imagePath = path.join(__dirname, "image.jpeg"); // 图片文件名为 image.jpeg // 设置响应头为图片格式
  response.setHeader("Content-Type", "image/jpeg"); // 读取并发送图片
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      // 如果读取失败，返回错误信息
      response.statusCode = 404;
      response.end("图片未找到");
      return;
    } // 发送图片数据
    response.end(data);
  });
});
// 启动服务器并监听指定端口
server.listen(3000, () => {
  console.log(`Server is running athttp://localhost:3000`);
});
