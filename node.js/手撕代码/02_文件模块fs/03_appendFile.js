const fs = require("fs");
fs.appendFile("./readme.txt", "这是追加的内容", "utf8", (err) => {
  if (err) {
    console.log("追加内容错误", err);
    return;
  }
});

try {
  fs.appendFileSync("./readme.txt", "这是追加的内容", "utf8");
} catch (err) {
  console.log(err);
}
