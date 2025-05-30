var express = require("express");
var router = express.Router();
var avaliacaoController = require("../controllers/avaliacaoController");
var comentarioController = require("../controllers/comentarioController");
var favoritorController = require("../controllers/favoritoController");
var categoriaController = require("../controllers/categoriaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/mediaAvaliacao/:id_usuario", function (req, res) {
    avaliacaoController.mediaAvaliacao(req, res);
});
router.get("/selectCountComentariosUsuario/:id_usuario", function(req, res) {
    comentarioController.countComentariosUsuario(req, res);
});
router.get("/selectCountFavoritosUsuario/:id_usuario", function (req, res) {
    favoritorController.countFavoritosUsuario(req, res);
});
router.get("/listaCategoriasFavoritas/:id_usuario",function(req,res){
    categoriaController.selectCategoriaFavoritas(req,res);
})

module.exports = router;