const fs = require("fs");
fs.unlink("./readme.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
