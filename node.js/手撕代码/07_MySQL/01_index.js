// CREATE DATABASE IF NOT EXISTS mydatabase
// CHARACTER SET utf8mb4
// COLLATE utf8mb4_unicode_ci;

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(50) NOT NULL,
//     email VARCHAR(100) NOT NULL,
//     birthdate DATE,
//     is_active BOOLEAN DEFAULT TRUE
// );

// // -- 创建学生表
// CREATE TABLE students (
//     student_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     gender ENUM('男','女','其他') NOT NULL,
//     birth_date DATE,
//     email VARCHAR(100) UNIQUE,
//     admission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     INDEX idx_name (name)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
// // 在 MySQL 中，CURRENT_TIMESTAMP 是一个内置的 时间函数，
// // 用于返回当前的日期和时间。它在处理时间戳相关操作时非常常用，
// // 尤其是在自动记录或更新时间字段时。

// // -- 在 users 表中添加一个名为 phone 的列，数据类型为VARCHAR(20)
// ALTER TABLE users ADD COLUMN phone VARCHAR(20);
// // -- 在 users 表中添加一个名为 address 的列，数据类型为VARCHAR(200)，并将其添加到 name 列之后
// ALTER TABLE users ADD COLUMN address VARCHAR(200) AFTER name;

// // -- 将 users 表中 age 列的数据类型从 INT 修改为 TINYINT
// ALTER TABLE users MODIFY COLUMN age TINYINT;
// // -- 将 users 表中 email 列的数据类型从 VARCHAR(100) 修改为VARCHAR(200)，并设置为 NOT NULL
// ALTER TABLE users MODIFY COLUMN email VARCHAR(200) NOT NULL;

// // -- 将 users 表中的 birth_date 列名改为 birthday，数据类型从 DATE 修改为 DATETIME
// ALTER TABLE users CHANGE COLUMN birth_date birthday DATETIME;

// // -- 删除 users 表中的 phone 列
// ALTER TABLE users DROP COLUMN phone;

// // -- 为 orders 表的 order_id 列添加主键约束
// ALTER TABLE orders ADD PRIMARY KEY (order_id)
// // --如果是联合主键，添加逗号，后面继续写列名即可

// // -- 删除 orders 表的主键约束
// ALTER TABLE orders DROP PRIMARY KEY;

// // -- 为 users 表的 username 列添加唯一约束
// ALTER TABLE users ADD UNIQUE (username);

// // -- 删除 users 表的 username 列的唯一约束
// ALTER TABLE users DROP INDEX username;

// // -- 为 orders 表的 customer_id 列添加外键约束，关联到customers 表的 customer_id 列
// ALTER TABLE orders ADD CONSTRAINT fk_orders_customers
// FOREIGN KEY (customer_id) REFERENCES customers (customer_id);

// // -- 删除 orders 表的 fk_orders_customers 外键约束
// ALTER TABLE orders DROP FOREIGN KEY fk_orders_customers;

// // -- 将 users 表重命名为 customers
// ALTER TABLE users RENAME TO customers;

// // -- 列级定义主键
// CREATE TABLE students (
//   student_id INT PRIMARY KEY AUTO_INCREMENT,
//   student_name VARCHAR(50),
//   age INT
// );
// // student_id 列被设置为主键列，使用了 PRIMARY KEY 约束。此约束赋予了 student_id 列两个重要特性：
// // 唯一性
// //   表中每一行记录的 student_id 值都得是独一无二的。也就是说，
// //   不能存在两条记录的 student_id 是相同的。这就好比在现实生活里，
// //   每个人的身份证号都是唯一的，不会有两个人拥有相同的身份证号。
// // 非空性
// //   student_id 列的值不能为 NULL。在插入新记录时，必须为student_id 列提供一个有效的整数值，
// //   不能让它为空。这就如同身份证号必须是明确存在的，不能是空白。

// // -- 表级定义主键
// CREATE TABLE products (
//   product_id INT,
//   product_name VARCHAR(100),
//   price DECIMAL(10, 2),
//   PRIMARY KEY (order_id,product_id) // (order_id, product_id) 共同构成了 order_items 表的主键。
// );
// // 这意味着只有 order_id 和 product_id 的组合才能唯一标识表中的每一行数据，
// // 单独的 order_id 或 product_id 都不能保证唯一性。
// // 例如，一个订单可能包含多种商品，同一商品也可能被多个订单订购，只有同时指定订单编号和商品编号，
// // 才能准确确定某一订单中具体某一商品的数量等信息。

// // 使用多列主键的情况通常出现在需要多个属性共同才能唯一确定一条记录的时候，它可以更精确地维护数据的完整性和一致性。

// // -- 列级定义唯一约束
// CREATE TABLE employees (
//   employee_id INT,
//   email VARCHAR(100) UNIQUE,
//   name VARCHAR(50)
// );

// // -- 表级定义唯一约束
// CREATE TABLE accounts (
//   account_id INT,
//   username VARCHAR(50),
//   phone_number VARCHAR(20),
//   UNIQUE (username, phone_number)
// );

// CREATE TABLE customers (
//     customer_id INT,
//     customer_name VARCHAR(100) NOT NULL,
//     address VARCHAR(200)
// );

// CREATE TABLE orders (
//     order_id INT,
//     order_date DATE DEFAULT CURDATE(),
//     status VARCHAR(20) DEFAULT 'Pending'
//     age INT DEFAULT 18,  // -- 数值默认值无需引号
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     //-- 当前时间戳，CURRENT_TIMESTAMP 是 MySQL 中用于获取当前时间戳的函数
// );

// // -- 创建父表
// CREATE TABLE departments (
//   department_id INT PRIMARY KEY,
//   department_name VARCHAR(100)
// );
// // -- 创建子表
// CREATE TABLE employees (
//   employee_id INT PRIMARY KEY,
//   employee_name VARCHAR(50),
//   department_id INT,
//   FOREIGN KEY (department_id)
//   REFERENCES departments (department_id)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE
// );

// CREATE TABLE products (
//     product_id INT,
//     product_name VARCHAR(100),
//     price DECIMAL(10, 2),
//     CHECK (price > 0)
// );

// // 创建表格
// create table students(
//     student_id int AUTO_INCREMENT PRIMARY KEY,
//     name varchar(50) not null,
//     gender ENUM('男','女') not null
// );
// // 插入单条数据
// insert into students(name,gender) values ('张三','男');
// // 插入多条数据
// insert into students(name,gender) values ('李四','女'),("王五",'男');

// insert into students values ( default,'小强','男');

// update students set name="哈哈哈" where student_id=3;

// UPDATE users SET age = 30 WHERE id = 1; // -- 更新id为1的记录
// UPDATE products SET price = price * 1.1 WHERE price< 100; // -- 价格低于100的商品涨价10%

// // -- 查询所有列
// SELECT * FROM employees;
// // -- 查询特定列
// SELECT id, name, salary FROM employees;
// // -- 使用列别名
// SELECT id AS employee_id, name AS employee_name FROM employees;


