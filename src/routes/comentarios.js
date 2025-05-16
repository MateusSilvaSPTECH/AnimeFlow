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
})
module.exports = router;