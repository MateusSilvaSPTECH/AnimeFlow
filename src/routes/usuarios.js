var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); 
var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});
router.put('/atualizar', upload.single('foto'), (req, res) => {
  usuarioController.atualizar(req, res);
});
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.get("/selectDadosbyId/:id", function (req, res) {
    usuarioController.selectDadosbyId(req, res);
});
module.exports = router;