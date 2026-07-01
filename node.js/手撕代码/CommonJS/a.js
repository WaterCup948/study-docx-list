// 定义一个变量
const message = "Hello, CommonJS!";
// 定义一个函数
function sayHello() {
  console.log(message);
}
// 使用 exports 导出变量和函数
exports.message = message;
exports.sayHello = sayHello;
// module.exports = {}; //此时其他文件导入此模块，拿到的就会是空对象
