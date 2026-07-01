const fs = require("fs");
fs.rmdir("page/utils", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
fs.rm("page/utils", { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
