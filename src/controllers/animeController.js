var animeModel = require("../models/animeModel");
function selectAll(req, res){
animeModel.selectAll().then(
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
var animeModel = require("../models/animeModel");
function selectAllEstacao(req, res){
animeModel.selectAllEstacao().then(
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
function selectAllPorCategoria(req, res){
    var id_categoria = req.params.id_categoria;
animeModel.selectAllPorCategoria(id_categoria).then(
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
function selectAllPorEstacao(req, res){
    var estacao = req.params.estacao;
animeModel.selectAllPorEstacao(estacao).then(
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

function selectEstacao(req, res){
    var estacao = req.params.estacao;
    animeModel.selectEstacao(estacao).then(
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
function selectIdAnime(req, res){
    var id = req.params.id;
    animeModel.selectIdAnime(id).then(
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
function selectPopulares(req, res){
    animeModel.selectPopulares().then(
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
function atualizarAnime(req, res){
                const id = req.body.id;
                const titulo = req.body.titulo;
                const descricao = req.body.descricao;
                const traducao = req.body.traducao;
                const estacao = req.body.estacao;
                const classificacao = req.body.classificacao;
                const temporada = req.body.temporada;
                const episodeo = req.body.episodeo;
                const dataLancamento = req.body.dataLancamento;
    animeModel.atualizarAnime(id,titulo,descricao,classificacao,traducao,estacao,dataLancamento,episodeo,temporada).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar)
        }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao atualizar anime! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
function deletarAnime(req, res){
    const id = req.params.id;
    animeModel.deletarAnime(id).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar)
        }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao atualizar anime! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    selectAll,
    selectEstacao,
    selectIdAnime,
    selectAllPorCategoria,
    selectPopulares,
    selectAllEstacao,
    selectAllPorEstacao,
    atualizarAnime,
    deletarAnime
}