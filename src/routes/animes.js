var express = require("express");
var router = express.Router();

var animeController = require("../controllers/animeController");

router.get("/listarTodos", function(req, res) {
    animeController.selectAll(req, res);
});
router.get("/listaTodasEstacoes", function(req, res) {
    animeController.selectAllEstacao(req, res);
});
router.get("/listaPorEstacao/:estacao", function(req, res) {
    animeController.selectAllPorEstacao(req, res);
});
router.get("/listarTodosPorCategoria/:id_categoria", function(req, res) {
    animeController.selectAllPorCategoria(req, res);
});
router.get("/listarPorEstacao/:estacao", function(req, res) {
    animeController.selectEstacao(req, res);
});
router.get("/listarIdAnime/:id", function(req, res) {
    animeController.selectIdAnime(req, res);
});
router.get("/listarPopulares", function(req, res) {
    animeController.selectPopulares(req, res);
});
router.get("/listarPopulares", function(req, res) {
    animeController.selectPopulares(req, res);
});
router.put("/atualizarAnime", function(req, res) {
    animeController.atualizarAnime(req, res);
});
router.delete("/deletarAnime/:id", function(req, res) {
    animeController.deletarAnime(req, res);
});
module.exports = router;