var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.post("/cadatrarComentario", function(req, res) {
    comentarioController.cadastrar(req, res);
});

router.get("/selectAllComentario/:id_anime", function(req, res) {
    comentarioController.selectAllComentarios(req, res);
});
router.get("/selectCountComentarios/:id_anime", function(req, res) {
    comentarioController.countComentarios(req, res);
});
router.delete("/deletarComentario/:id", function(req, res) {
    comentarioController.deletarComentario(req, res);
});

router.post("/cadastrarRespostaComentario", function(req,res){
    comentarioController.cadastrarResposta(req,res);
});

router.post("/cadastrarCurtidaComentario", function(req,res){
    comentarioController.cadastrarCurtida(req,res);
});
router.put("/atualizarCurtidaComentario", function(req,res){
    comentarioController.atualizarCurtida(req,res);
});
router.get("/verificarCurtidaByUsuario/:id_usuario/:id_comentario", function(req,res){
    comentarioController.verificarCurtidaById(req,res);
});
module.exports = router;