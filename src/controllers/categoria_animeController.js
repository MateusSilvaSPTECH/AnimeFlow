var categoria_animeModel = require("../models/categoria_animeModel");

function selectCategoriaAnime(req, res){
    var id = req.params.id;
    categoria_animeModel.selectCategoriaAnime(id).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar)
        }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
module.exports = {
    selectCategoriaAnime
}