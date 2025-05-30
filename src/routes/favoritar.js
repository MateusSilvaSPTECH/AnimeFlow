var express = require("express");
var router = express.Router();

var favoritorController = require("../controllers/favoritoController");

router.post("/favoritarAnime", function (req, res) {
    favoritorController.favoritarAnime(req, res);
});
router.put("/updateFavoritarAnime", function (req, res) {
    favoritorController.updateFavoritarAnime(req, res);
});
router.get("/selectAnimesFavoritosById/:id_usuario", function (req, res) {
    favoritorController.selectAnimesFavoritosByUsuario(req, res);
});
router.get("/verificarAnimesFavoritosUsuario/:id_usuario/:id_anime", function (req, res) {
    favoritorController.verificarAnimesFavoritosUsuario(req, res);
});

module.exports = router;