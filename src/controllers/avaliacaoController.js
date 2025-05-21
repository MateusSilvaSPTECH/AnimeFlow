var avaliacaoModel = require("../models/avaliacaoModel");

function cadastrarAvaliacao(req, res) {
    var valorAvalicao = req.body.valorAvalicao;
    var id_anime = req.body.id_anime;
    var id_usuario = req.body.id_usuario;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliacaoModel.cadastrarAvaliacao(valorAvalicao, id_anime, id_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da avaliacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function updateAvaliacao(req, res) {
    var valorAvalicao = req.body.valorAvalicao;
    var id_anime = req.body.id_anime;
    var id_usuario = req.body.id_usuario;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliacaoModel.updateAvaliacao(valorAvalicao, id_anime, id_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da avaliacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function selectAvaliacao(req, res) {
     var id_anime = req.params.id_anime;
   avaliacaoModel.selectAvaliacao(id_anime).then(
           function (resultadoAutenticar) {
               console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
               console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
               res.json(resultadoAutenticar)
           }).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao trazer dados do usuario por id! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
}

module.exports = {
    cadastrarAvaliacao,
    selectAvaliacao,
    updateAvaliacao
}