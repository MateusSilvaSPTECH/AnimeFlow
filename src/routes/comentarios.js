var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.post("/cadatrarComentario", function(req, res) {
    comentarioController.cadastrar(req, res);
});

router.get("/selectAllComentario", function(req, res) {
    comentarioController.selectAllComentarios(req, res);
});

module.exports = router;