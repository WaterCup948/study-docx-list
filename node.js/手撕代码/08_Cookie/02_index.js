const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/set") {
    let cookie = [
      "username=John;",
      "Path=/api; ", // Cookie 的路径  /api路径之下才会携带cookie
      "Domain=localhost; ", // Cookie 的域名
      "Max-Age=3600; ", // 过期时间（秒） 优先级更高
      "Expires=Wed, 21 Oct 2024 07:28:00 GMT;", // 具体的过期时间
      "Secure; ", // 只在 HTTPS 中传输
      "HttpOnly; ", // 禁止 JavaScript访问
      "SameSite=Strict", // 防止 CSRF 攻击
    ].join(";");
    res.setHeader("Set-Cookie", cookie);
    res.end("Cookie set");
  }
  if (req.url === "/get") {
    const cookie = req.headers.cookie;
    res.end(`Cookie: ${cookie}`);
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
