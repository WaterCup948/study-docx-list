const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/set") {
    // 设置 Cookie
    res.setHeader("Set-Cookie", "username=John");
    res.end("Cookie set");
  }
  if (req.url === "/get") {
    // 读取 Cookie
    const cookie = req.headers.cookie;
    res.end(`Cookie: ${cookie}`);
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
