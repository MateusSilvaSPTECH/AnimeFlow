var animeModel = require("../models/animeModel");
function selectAll(req, res){
animeModel.selectAll().then(
    function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
        res.json(resultadoAutenticar)
    })
}

module.exports = {
    selectAll
}