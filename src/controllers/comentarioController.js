var comentarioModel = require("../models/comentarioModel");

function cadastrar(req, res) {
        var descricao = req.body.descricao;
        var fk_anime = req.body.id_anime;
        var fk_usuario = req.body.id_usuario;
        comentarioModel.cadastrar(descricao, fk_anime, fk_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function selectAllComentarios(req, res) {
        comentarioModel.selectAllComentarios()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o select all! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
module.exports = {
    cadastrar,
    selectAllComentarios

}