const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const app = express();
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
app.use(express.json());
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PSD,
  database: "education",
});
// 注册接口
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  // 1. 先检查用户名是否存在
  const sql = "SELECT * FROM users WHERE username = ?";
  pool.execute(sql, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "数据库查询错误" });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: "用户名已存在" });
    }
    // 2. 加密密码
    bcrypt.hash(password.toString(), 10, (err, hashedPassword) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "密码加密失败" });
      }
      // 3. 插入新用户
      const inSql = "INSERT INTO users (username, password)VALUES (?, ?)";
      pool.execute(inSql, [username, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ error: "注册失败" });
        }
        res.status(201).json({
          message: "注册成功",
          userId: result.insertId,
        });
      });
    });
  });
});

// 登录接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // 1. 查找用户
  const sql = "SELECT * FROM users WHERE username = ?";
  pool.execute(sql, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "数据库查询错误" });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: "用户名不存在" });
    }
    // 2. 验证密码
    bcrypt.compare(password.toString(), results[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "密码验证失败" });
      }
      if (!isMatch) {
        return res.status(401).json({ error: "用户名或密码错误" });
      }
      // 3. 生成 JWT
      const token = jwt.sign(
        {
          userId: user.userid,
          username: user.username,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      // 4. 返回结果
      res.json({
        message: "登录成功",
        token: token,
        user: {
          id: user.userid,
          username: user.username,
        },
      });
    });
  });
});

app.listen(3000, () => {
  console.log("正在运行");
});
