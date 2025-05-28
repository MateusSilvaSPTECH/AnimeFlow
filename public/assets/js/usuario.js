function dadosUsuario(id){
    fetch(`/usuarios/selectDadosbyId/${id}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }
        
    ).then(dados => dados.json())
    
    .then(dados =>{

        console.log(dados)
        if (dados.length > 0) {
        const usuario = dados[0];
        caminho_img = "assets/img/imgUpload/"+usuario.foto;
        nome.value = usuario.nome;
        email.value = usuario.email;
        senha.value = usuario.senha;
        img.src = caminho_img;
        sessionStorage.EMAIL_USUARIO = usuario.email;
        sessionStorage.NOME_USUARIO = usuario.nome;
        sessionStorage.FOTO_USUARIO = usuario.foto ? usuario.foto : 'padrao.png'; 
      }
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}
function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}