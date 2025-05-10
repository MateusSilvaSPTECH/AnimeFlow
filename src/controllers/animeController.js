var animeModel = require("../models/animeModel");
function selectAll(req, res){
animeModel.selectAll().then(
    function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
        res.json(resultadoAutenticar)
    })
}

function selectTemporada(req, res){
    var temporada = req.params.temporada;
    animeModel.selectTemporada(temporada).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar)
        })
    }
function selectIdAnime(req, res){
    var id = req.params.id;
    animeModel.selectIdAnime(id).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar)
        })
    }

module.exports = {
    selectAll,
    selectTemporada,
    selectIdAnime
}