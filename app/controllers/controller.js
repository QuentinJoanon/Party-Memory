const fileList = require('../js/fileList.js');

const controller = {
  /**
   * Affichage de la page principale
   * Parametre "articles"
   */
  homePage(req, res){
    res.render("index");
  },
  /**
   * Affichage de la galerie
   * Parametre "fileList"
   */
  galleryPage(req, res){
    res.render("gallery", {fileList});
  },
    /**
   * Affichage de la page upload
   * Pas de paramètres
   */
    uploadPage(req, res){
      res.render("upload");
    },
};

module.exports = controller;
