const fs = require("fs");
fs.writeFile("./readme.txt", "这是写入的内容", "utf8", (err) => {
  if (err) {
    console.log("写入文件错误", err);
    return;
  }
});

try {
  fs.writeFileSync("./readme.txt", "这是写入的内容", "utf8");
} catch (err) {
  console.log(err);
}
