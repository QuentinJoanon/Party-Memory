const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', '..');

const uploadDir = path.join(rootDir, 'public', 'uploads');

let fileList = [];

fs.readdir(uploadDir, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (const file of files) {
      if (path.extname(file) === '.jpg') {
        fileList.push(file);
      }
    }
    console.log(fileList);
  }
});



module.exports = fileList ;
