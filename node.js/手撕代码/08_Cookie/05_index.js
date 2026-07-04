const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const app = express();
require("dotenv").config();
// 秘钥，生产环境中应该存在环境变量里
const JWT_SECRET = process.env.JWT_SECRET;
app.use(express.json());
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  // password: "123456",
  password: process.env.DB_PSD,
  database: "education",
});

// --- 身份验证中间件 ---
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  if (!token) {
    return res.status(401).json({ error: "未提供访问令牌" });
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ error: "令牌已过期" });
      }
      return res.status(403).json({ error: "无效的令牌" });
    }
    // 将解码后的用户信息附加到请求对象上
    req.user = user;
    next(); // 继续处理请求
  });
}
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "select * from userinfo where username=? AND password=?";
  pool.execute(sql, [username, password], (err, value) => {
    if (err) {
      return res.status(500).json({ error: "数据查询失败" });
    }
    if (!value.length) {
      return res.status(401).json({ error: "用户名或者密码有误" });
    }
    const user = value[0];
    const token = jwt.sign(
      {
        username: user.username,
        userid: user.userid,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      message: "成功",
      token: token,
      user: {
        userid: user.userid,
        username: user.username,
      },
    });
  });
});

// 获取学生列表接口 (受保护)
app.get("/students", authenticateToken, (req, res) => {
  // 因为 authenticateToken 中间件已经验证了 token，
  // 所以这里可以安全地假设用户已认证
  // console.log('访问 /students 的用户信息:',req.user); // 可以看到 JWT 解码后的信息
  const statement = "SELECT * FROM students"; //假设你有一个名为 students 的表
  pool.query(statement, (err, results) => {
    if (err) {
      console.error("查询 students 表失败:", err);
      return res.status(500).json({ error: "数据库查询失败" });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("正在运行");
});
