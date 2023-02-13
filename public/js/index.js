const PORT = process.env.PORT || 3000;
const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const fileList = require('../../js/fileList');



app.set("views","./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/gallery", (req, res)=>{
  res.render("gallery");
});

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
  res.render("upload");
});

app.listen(PORT, ()=>{
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
