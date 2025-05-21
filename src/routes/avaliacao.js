var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); 
var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarAvaliacao", function (req, res) {
    avaliacaoController.cadastrarAvaliacao(req, res);
});
router.put("/updateAvaliacao", function (req, res) {
    avaliacaoController.updateAvaliacao(req, res);
});
router.get("/selectAvaliacao/:id_anime", function (req, res) {
    avaliacaoController.selectAvaliacao(req, res);
});
module.exports = router;