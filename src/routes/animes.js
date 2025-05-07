var express = require("express");
var router = express.Router();

var animeController = require("../controllers/animeController");

router.get("/mostrar", function() {
    animeController.selectAll();
});
module.exports = router;