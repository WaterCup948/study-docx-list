const fs = require("fs");
const writeStream = fs.createWriteStream("output.txt"); // 没有文件会自动新建文件
writeStream.write("Hello, ");
writeStream.end("World!"); //调用 end() 方法明确地结束了写入过程
writeStream.on("finish", () => {
  //finish 事件只有在调用 end() 方法且所有数据都被写入目标后才会触发。
  //   如果不调用end() 方法，你就无法通过 finish 事件来得知写入操作是否已经完成。
  console.log("所有数据已写入文件");
});
writeStream.on("error", (err) => {
  console.error("写入数据时出错:", err);
});

const fs = require("fs");
// 创建读取流和写入流
const readStream = fs.createReadStream("1.认识uniapp.mp4");
const writeStream = fs.createWriteStream("徐老师教学.mp4");
// 监听读取到的数据
readStream.on("data", (chunk) => {
  writeStream.write(chunk); // 将读取到的数据写入新文件
});
// 监听读取完成事件
readStream.on("end", () => {
  writeStream.end(); // 结束写入流
  console.log("视频复制完成！");
});
// 监听错误事件
readStream.on("error", (err) => console.error("读取错误:", err));
writeStream.on("error", (err) => console.error("写入错误:", err));
