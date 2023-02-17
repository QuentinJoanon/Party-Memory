const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

const path = require('path');
const router = require('./app/routers/router');
const { upload, uploadRoute } = require('./app/js/upload');


app.set("views","app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(router);


app.post('/upload', upload.single('photo'), uploadRoute);


app.listen(PORT, ()=>{
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
