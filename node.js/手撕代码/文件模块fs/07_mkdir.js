const fs = require("fs");
fs.mkdir("page/utils",{recursive:true},(err) => {
  if (err) {
    console.log(err);
  }
});