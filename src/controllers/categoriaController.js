var categoriaModel = require("../models/categoriaModel");
function selectAll(req, res){
categoriaModel.selectAll().then(
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
function selectCategoriaFavoritas(req, res){
    var id_usuario = req.params.id_usuario;
categoriaModel.selectCategoriaFavoritas(id_usuario).then(
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
    selectAll,
    selectCategoriaFavoritas
}