const fs = require("fs");
fs.rename("./readme.txt", "./readme2.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
