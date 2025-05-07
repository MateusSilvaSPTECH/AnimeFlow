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
        });
}
