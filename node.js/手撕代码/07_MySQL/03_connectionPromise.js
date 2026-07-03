const mysql = require("mysql2/promise");
async function main() {
  // mysql2/promise版本createConnection返回的是Promise
  // 会自动处理连接过程，不需要connection.connection连接数据库
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "123456",
    database: "education",
  });
  try {
    console.log("成功连接到数据库"); //第一个元素是查询结果（rows） 第二个元素是字段信息（fields）
    const [rows] = await connection.query("SELECT * FROM users");
    console.log(rows);
  } catch (err) {
    console.error("错误:", err);
  } finally {
    await connection.end();
    console.log("连接已关闭");
  }
}
main();
