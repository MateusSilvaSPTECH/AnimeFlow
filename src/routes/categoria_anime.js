var express = require("express");
var router = express.Router();

var categoria_animeController = require("../controllers/categoria_animeController");

router.get("/listarAnimeCategoria/:id",function(req,res){
    categoria_animeController.selectCategoriaAnime(req,res);
})
module.exports = router;