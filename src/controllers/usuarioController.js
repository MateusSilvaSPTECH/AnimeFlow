var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body)
    var nome = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function atualizar(req, res) {
  const foto = req.file ? req.file.filename : req.body.fotoAntiga;
  const {nome, email,senha,id} = req.body
  const usuario = { nome, email,senha, foto,id }
   usuarioModel.atualizar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario atualizado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}
function selectDadosbyId(req, res) {
     var id = req.params.id;
   usuarioModel.selectDadosbyId(id).then(
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
    autenticar,
    cadastrar,
    atualizar,
    selectDadosbyId
}