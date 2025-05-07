function cadastrar() {
    var username = input_username.value;
    var email = input_email.value;
    var senha = input_senha.value;

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                usernameServer : username,
                emailServer : email,
                senhaServer : senha
            })
        }).then(function(resposta) {
            
            if(resposta.ok){
                div_erros_login.innerHTML = `Cadastro Realizado com Sucesso!`
                limparFormulario();
                setTimeout (() =>{
                    window.location = "login.html";
                }, "2000");
            }
            
        })
}
