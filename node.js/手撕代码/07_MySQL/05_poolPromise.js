const mysql = require("mysql2/promise");
// 1. 创建连接池
//连接池不需要主动调用 connect() 方法。连接池会自动管理连接的创建和销毁。
const pool = mysql.createPool({
  host: "localhost", // 数据库服务器的地址，通常是本地开发时的 'localhost'
  user: "root", // 数据库用户名，通常是 'root'，但在生产环境中应使用更安全的用户名
  port: 3306, // MySQL 的默认端口是 3306，可以省略
  password: "xc123456", // 数据库用户的密码，确保在生产环境中使用安全的密码
  database: "demo01", // 要连接的数据库名称
});

async function main() {
  const sql = "select * from users";
  try {
    const [res] = await pool.query(sql);
    console.log("查询结果", res);
  } catch (error) {
    console.log(error);
  }
}
main();
