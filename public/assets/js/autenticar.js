function autenticar() {
        //aguardar();

        var email = input_email.value;
        var senha = input_senha.value;
        console.log(email);
        console.log(senha);
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.FOTO_USUARIO = json.foto;
                    var data = new Date();
                    var horas =  data.getHours();
                    var minutos = data.getMinutes();
                    var segundos = data.getSeconds();
                    var listaTempo = [horas,minutos,segundos];
                    var sessao_atual = listaTempo;
                    sessionStorage.TEMPO_COMECO = sessao_atual;
                    setTimeout(function () {
                        window.location = "./catalogo.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

    function sumirMensagem() {
        cardErro.style.display = "none"
    }
