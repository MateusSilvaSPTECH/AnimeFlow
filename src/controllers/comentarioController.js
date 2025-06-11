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
function deletarComentario(req,res){
        var id = req.params.id;
        comentarioModel.deletarComentario(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o delete! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function selectAllComentarios(req, res) {
    var fk_anime = req.params.id_anime;
        comentarioModel.selectAllComentarios(fk_anime)
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

function countComentarios(req,res){
     var fk_anime = req.params.id_anime;
    comentarioModel.countComentarios(fk_anime).then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o COUNT COMENTARIO! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function countComentariosUsuario(req,res){
     var id_usuario = req.params.id_usuario;
    comentarioModel.countComentariosUsuario(id_usuario).then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o COUNT COMENTARIO! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function cadastrarResposta(req, res) {
        var descricao = req.body.descricao;
        var fk_anime = req.body.id_anime;
        var fk_usuario = req.body.id_usuario;
        var id_comentario = req.body.id_resposta;
        comentarioModel.cadastrarResposta(descricao, fk_anime, fk_usuario,id_comentario)
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
function cadastrarCurtida(req, res) {
        var fk_usuario = req.body.id_usuario;
        var id_comentario = req.body.id_comentario;
        comentarioModel.cadastrarCurtida(fk_usuario,id_comentario)
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
function atualizarCurtida(req, res) {
        var status = req.body.statusAtual;
        var fk_usuario = req.body.fk_usuario;
        var id_comentario = req.body.id_comentario;
        comentarioModel.atualizarCurtida(status,fk_usuario,id_comentario)
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

function verificarCurtidaById(req, res) {
    var id_usuario = req.params.id_usuario;
    var id_comentario = req.params.id_comentario;
    comentarioModel.verificarCurtidaById(id_usuario,id_comentario).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao trazer dados do usuario por id! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
                   }
               );
}
function selectCountCurtidasUsuario(req, res) {
    var id_usuario = req.params.id_usuario;
    comentarioModel.selectCountCurtidasUsuario(id_usuario).then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
            res.json(resultadoAutenticar);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao trazer dados do usuario por id! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
                   }
               );
}
module.exports = {
    cadastrar,
    selectAllComentarios,
    countComentarios,
    deletarComentario,
    cadastrarResposta,
    countComentariosUsuario,
    cadastrarCurtida,
    atualizarCurtida,
    verificarCurtidaById,
    selectCountCurtidasUsuario
}