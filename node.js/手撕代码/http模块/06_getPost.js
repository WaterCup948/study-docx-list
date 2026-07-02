const http = require("http");
const fs = require("fs");
const path = require("path");
const myurl = require("url");
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=UTF-8");
  // 这里会跨域，所以设置下
  // * 的意思是允许所有域名访问
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 只允许特定域名访问
  // res.setHeader("Access-Control-Allow-Origin", "http://loaclhost:5173");
  // 告诉浏览器服务器允许哪些 HTTP 方法，这里设置了允许POST、GET 和 OPTIONS 请求，
  // 如果不设置这个，浏览器会认为服务器只允许 GET 请求
  response.setHeader("Access-Control-AllowMethods", "POST, GET, OPTIONS");
  //告诉浏览器服务器允许哪些请求头，这里设置了允许Content-Type 请求头，
  // 如果不设置这个，当发送 POST 请求时，如果请求头中包含 Content-Type，浏览器会拒绝请求
  response.setHeader("Access-Control-AllowHeaders", "Content-Type");
  // 处理 OPTIONS 预检请求，
  // 浏览器先发送 OPTIONS 预检请求  服务器返回 200 状态码，表示允许跨域
  // 浏览器再发送实际的 POST 请求  服务器处理 POST 请求并返回数据
  if (request.method === "OPTIONS") {
    response.writeHead(200);
    response.end();
    return;
  }
  const { url, method } = request;
  // pathname: 请求路径
  // query: 请求参数
  const { pathname, query } = myurl.parse(url, true);
  if (method == "GET") {
    if (pathname === "/api/users") {
      const users = [
        { id: 1, name: "张三", age: 18 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 22 },
      ];
      response.end(JSON.stringify(users));
    } else if (pathname == "/api/products") {
      const products = [
        { id: 1, name: "商品1", price: 18 },
        { id: 2, name: "商品2", price: 20 },
        { id: 3, name: "商品3", price: 22 },
      ];
      response.end(JSON.stringify(products));
    } else {
      response.statusCode = 404;
      response.end(JSON.stringify("接口不存在"));
    }
  } else if (method == "POST") {
    let body = "";
    // 接收数据
    request.on("data", (chunk) => {
      body += chunk;
    });
    // 数据接收结束
    request.on("end", () => {
      let postBody = JSON.parse(body);
      if (url === "/api/login") {
        response.end(
          JSON.stringify({
            success: true,
            message: "登陆成功",
            token: "jsdklsjdfksdfklhklsskldfjeoioef",
          })
        );
      } else {
        response.statusCode = 404;
        response.end(JSON.stringify("接口不存在"));
      }
    });
  }
});
// 启动服务器并监听指定端口
server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
