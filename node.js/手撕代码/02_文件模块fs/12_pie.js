const fs = require("fs");
const readStream = fs.createReadStream("video.mp4"); // 读取
const writeStream = fs.createWriteStream("徐老师教学.mp4"); // 写入
// pipe 会自动处理数据的读取和写入
readStream.pipe(writeStream);
// 监听完成事件
writeStream.on("finish", () => {
  console.log("视频复制完成！");
});
