const mysql = require("mysql2");
// 创建单个连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456",
  database: "education",
});

// 连接数据库
connection.connection((err) => {
  if (err) {
    console.log("连接失败", err);
    return;
  }
  console.log("连接成功");

  // 执行查询
  const sql = "select * from user;";
  connection.query(sql, (err, value) => {
    if (err) {
      console.log("查询失败");
      return;
    }
    console.log("查询成功");
    console.log(value);
    // 关闭连接
    connection.end((err) => {
      if (err) {
        console.log("关闭连接失败", err);
      }
    });
  });
});
