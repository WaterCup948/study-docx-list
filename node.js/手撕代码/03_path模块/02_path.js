const path = require("path"); // 不用安装，Node.js 自带
const goodPath = path.join("src", "utils", "app.js");
// console.log(goodPath);
// Windows: "src\utils\app.js"
// Mac/Linux: "src/utils/app.js"

// console.log(path.resolve("app.js")); // __dirname + \app.js
// 输出：（解析了".."），会抵消掉上前面的一个路径片段
// __dirname + \temp
// ----> __dirname + \temp\a
// ----> __dirname + \temp
// ----> __dirname + \temp\b
// console.log(path.resolve("temp", "a", "..", "b"));

// const pathObj = path.parse(__dirname);
// console.log(pathObj);
/* 输出：
{
    root: 'E:\\',                                               // 根目录
    dir: 'E:\\学习文档\\study-docx-list\\node.js\\手撕代码',      // 文件所在目录
    base: 'path模块',                                            // 文件名+扩展名
    ext: '',                                                     // 扩展名
    name: 'path模块'                                             // 纯文件名
}
*/

// const newPath = path.format({
//   dir: "/tmp",
//   name: "temp",
//   ext: ".log",
// });
// console.log(newPath);

// 获取最后一级
// console.log(path.basename("/tmp/doc.txt")); // doc.txt
// 去掉扩展名
// console.log(path.basename("/tmp/doc.txt", ".txt"));

// console.log(path.dirname("/a/b/c/file.txt")); //"/a/b/c"

// console.log(path.extname("index.html")); // ".html"
// console.log(path.extname("README")); // "" (空字符串)

console.log(path.normalize("/user//docs/../notes.txt"));
// 输出："/user/notes.txt" （自动优化）
