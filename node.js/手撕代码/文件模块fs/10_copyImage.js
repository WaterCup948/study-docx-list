const fs = require("fs");
fs.readFile("image.jpeg", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile("image2.jpeg", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});


