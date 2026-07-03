const mysql = require("mysql2");
// 1. 创建连接池
//连接池不需要主动调用 connect() 方法。连接池会自动管理连接的创建和销毁。
const pool = mysql.createPool({
  host: "localhost", // 数据库服务器的地址，通常是本地开发时的 'localhost'
  user: "root", // 数据库用户名，通常是 'root'，但在生产环境中应使用更安全的用户名
  port: 3306, // MySQL 的默认端口是 3306，可以省略
  password: "xc123456", // 数据库用户的密码，确保在生产环境中使用安全的密码
  database: "demo01", // 要连接的数据库名称
});

const sql = "select * from users";
// 执行查询操作
pool.query(sql, (err, value) => {
  if (err) {
    console.log("查询失败", err);
    return;
  }
  console.log(value);
});

// 异步操作
const sql1 = "select * from students;";
const sql2 = "select * from students where age>20;";
pool.query(sql1, (err, values) => {
  if (err) {
    console.error("查询失败", err);
    return;
  }
  console.log("所有数据", values);
});

pool.query(sql2, (err, values) => {
  if (err) {
    console.error("查询失败", err);
    return;
  }
  console.log("大于20岁的数据", values);
});

const statement = "INSERT INTO students (name,gender) VALUES (?,?);";
// 要插入的数据
const name = "科比";
const age = "男";
// name值给第一个？ age值给第二个？
pool.query(statement, [name, age], (err, values) => {
  if (err) {
    console.log("查询失败:", err);
    return;
  }
  console.log(values); // 查看结果
});

const statement = "INSERT INTO students (name, age) VALUES (?, ?)";
// 使用 execute 方法执行预处理语句
pool.execute(statement, ["张三", 20], (err, results) => {
  if (err) {
    console.error("插入失败:", err);
    return;
  }
  console.log("插入成功，插入ID:", results.insertId);
});
