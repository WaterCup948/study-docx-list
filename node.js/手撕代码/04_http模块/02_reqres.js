const http = require("http");
const server = http.createServer((request, response) => {
  // console.log("请求路径：", request.url);
  // console.log("请求方法：", request.method);
  // console.log("请求头：", request.headers);
  // response.statusCode = 201;
  // response.statusMessage = "OOKK";
  // 设置单个响应头,必须在write()或end()之前调用
  // response.setHeader("Content-Type", "text/html111111");
  // 一次性写入响应状态码、状态消息和多个头信息
  // response.writeHead(200, "OK", {
  //   "Content-Type": "text/htm",
  //   "Cache-Control": "no-cache2222",
  // });
  // 设置响应头，指定字符编码为 UTF-8
  response.setHeader("Content-Type", "text/plain; charset=utf-8"); // 使用 write 写入数据
  // response.write("第一段数据\n");
  // response.write("第二段数据\n");
  // response.write("第三段数据\n");
  // response.end("helloA");

  // 创建要发送的 JSON 数据
  const data = {
    name: "张三",
    age: 18,
    hobbies: ["篮球", "音乐", "编程"],
  };
  // 将 JavaScript 对象转换为 JSON 字符串
  //这里必须转成字符串，因为 HTTP 协议传输的本质是文本数据（字符串）。
  // response.end() 方法只能发送字符串或 Buffer，不能直接发送JavaScript 对象
  // 发送 JSON 数据
  const jsonData = JSON.stringify(data);
  response.end(jsonData);
});
server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
