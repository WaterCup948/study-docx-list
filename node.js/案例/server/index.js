const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
// 解析JSON格式的请求体
app.use(express.json());
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "education",
});

// 获取所有学员
app.get("/students", (req, res) => {
  const sql = "select * from students";
  pool.query(sql, (err, value) => {
    if (err) {
      res.status(500).json({ error: "获取学生列表失败" });
    } else {
      res.json(value);
    }
  });
});

// 添加学员接口
// 确定前端需要传 name age gender
app.post("/addStudents", (req, res) => {
  const { name, age, gender } = req.body;
  const sql = "insert into students (name,age,gender) values (?,?,?)";
  pool.execute(sql, [name, age, gender], (err, value) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "添加学生失败" });
    } else {
      res.json({
        message: "添加学员成功",
      });
    }
  });
});

// 删除学院接口
app.post("/deleteStudents", (req, res) => {
  const { id } = req.body;
  const sql = "delete from students where id=?";
  pool.query(sql, [id], (err, value) => {
    if (err) {
      res.status(500).json({ error: "删除学员失败" });
    } else {
      res.json({
        message: "删除学员成功",
      });
    }
  });
});

// 修改学生接口
app.post("/editStudents", (req, res) => {
  const { name, age, gender } = req.body;
  const sql = "update students set name=?,age=?,gender=? where id=?;";
  pool.execute(sql, [name, age, gender], (err, value) => {
    if (err) {
      res.status(500).json({ error: "修改学员失败" });
    } else {
      res.json({
        message: "修改学员成功",
      });
    }
  });
});

// 查询指定名字学生接口
app.post("/searchStudents", (req, res) => {
  const { name } = req.body;
  let sql = "select * from students";
  let params = [];
  if (name && name.trim() !== "") {
    sql = "select * from students where name=?";
    params = [name];
  }
  pool.execute(sql, params, (err, value) => {
    if (err) {
      res.status(500).json({ error: "查询学员失败" });
    } else {
      res.json(value);
    }
  });
});

app.listen(3000, () => {
  console.log("学员管理平台后端接口已运行在3000端口");
});
