function cadastrarComentario() {
    console.log('chamou');
    var descricao = input_descricao.value;

        fetch("/comentarios/cadatrarComentario", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                descricao : descricao,
                id_anime : sessionStorage.ID_ANIME,
                id_usuario : sessionStorage.ID_USUARIO
            })
        }).then(()=>{
                    input_descricao.value = "";
                    selectAllComentarios();    
                    getCountComentarios();     
            });
}