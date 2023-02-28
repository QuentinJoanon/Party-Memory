const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = {
  upload: upload,
  uploadRoute: (req, res) => {
/*     if(req.file === undefined){
      res.render("missing_file");
    }else{ */
      res.render("upload");
/*     } */
  }
};
