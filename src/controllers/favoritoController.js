var favoritoModel = require("../models/favoritoModel.js");

function favoritarAnime(req, res) {
    var status_favorito = req.body.status_favorito;
    var id_anime = req.body.id_anime;
    var id_usuario = req.body.id_usuario;
    console.log(status_favorito);
    console.log(id_anime);
    console.log(id_usuario);
        favoritoModel.favoritarAnime(status_favorito, id_anime, id_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao favoritar anime! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function updateFavoritarAnime(req, res) {
    var status_favorito = req.body.status_favorito;
    var id_anime = req.body.id_anime;
    var id_usuario = req.body.id_usuario;
    console.log(status_favorito);
    console.log(id_anime);
    console.log(id_usuario);
        favoritoModel.updateFavoritarAnime(status_favorito, id_anime, id_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao favoritar anime! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}
function selectAnimesFavoritosByUsuario(req, res) {
    var id_usuario = req.params.id_usuario;
    favoritoModel.selectAnimesFavoritosByUsuario(id_usuario).then(
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
function verificarAnimesFavoritosUsuario(req, res) {
    var id_usuario = req.params.id_usuario;
    var id_anime = req.params.id_anime;
    favoritoModel.verificarAnimesFavoritosUsuario(id_usuario,id_anime).then(
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
    favoritarAnime,
    selectAnimesFavoritosByUsuario,
    verificarAnimesFavoritosUsuario,
    updateFavoritarAnime
}