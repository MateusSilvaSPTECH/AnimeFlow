var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.get("/listaTodasCategorias",function(req,res){
    categoriaController.selectAll(req,res);
})
module.exports = router;