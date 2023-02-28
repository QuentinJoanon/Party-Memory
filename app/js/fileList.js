const fs = require("fs");
const path = require("path");

const regex = new RegExp(/(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);
function getAllImages() {
  return new Promise((resove, reject) => {
    fs.readdir(path.join(__dirname, "../../public/uploads"), (err, files) => {
      if (err) {
        reject(err);
      } else {
        for (const file of files) {
          if (!regex.test(path.extname(file))) {
            files.splice(file, 1);
          }
        }
        resove(files);
      }
    });
  });
}

module.exports = getAllImages;
