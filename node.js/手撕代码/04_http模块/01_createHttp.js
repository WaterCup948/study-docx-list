// 引入 http 模块
const http = require("http");
// 创建 HTTP 服务器，默认监听本机，localhost或者127.0.0.1
const server = http.createServer((request, response) => {
  //默认这样写是处理所有形式请求的，包含get和post
  //发送响应内容并结束响应
  response.end("helloA "); //必须调用 response.end() 结束每个请求 中文会乱码，因为没有设置响应头
});
// 启动服务器并监听指定端口
server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
