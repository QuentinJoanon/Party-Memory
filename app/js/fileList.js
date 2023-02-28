const fs = require('fs');
const path = require('path');

let fileList = [];

fs.readdir('public/uploads', (err, files) => {
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
