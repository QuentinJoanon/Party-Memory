const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send("Fichier uploadé avec succès");
});

app.listen(3000, () => console.log('Server started on port 3000'));
