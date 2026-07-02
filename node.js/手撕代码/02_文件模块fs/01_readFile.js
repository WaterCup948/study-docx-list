const fs = require("fs");
fs.readFile("./readme.txt", "utf8", (err, data) => {
  if (err) {
    console.error("文件读取错误", err);
    return;
  }
  console.log(data);
});
