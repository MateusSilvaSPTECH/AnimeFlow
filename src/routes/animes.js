var express = require("express");
var router = express.Router();

var animeController = require("../controllers/animeController");

router.get("/mostrar", function(req, res) {
    animeController.selectAll(req, res);
});
module.exports = router;