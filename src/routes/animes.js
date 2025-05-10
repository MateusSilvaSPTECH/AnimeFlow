var express = require("express");
var router = express.Router();

var animeController = require("../controllers/animeController");

router.get("/listarTodos", function(req, res) {
    animeController.selectAll(req, res);
});
router.get("/listarPorTemporada/:temporada", function(req, res) {
    animeController.selectTemporada(req, res);
});
router.get("/listarIdAnime/:id", function(req, res) {
    animeController.selectIdAnime(req, res);
});
module.exports = router;