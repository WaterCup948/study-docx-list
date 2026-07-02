const fs = require("fs");
fs.stat("./readme2.txt", (err, status) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(status);
});
