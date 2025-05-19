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

function inserirResposta(idComentario) {
    var id_comentario = idComentario;
    var descricao = input_resposta.value;
    console.log(descricao)
        fetch("/comentarios/cadastrarRespostaComentario", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                descricao : descricao,
                id_anime : sessionStorage.ID_ANIME,
                id_usuario : sessionStorage.ID_USUARIO,
                id_resposta : id_comentario
            })
        }).then(()=>{
                    input_descricao.value = "";
                    selectAllComentarios();    
                    getCountComentarios();     
            });
}
function deletarComentario(id){
    var id = id;
    console.log('deletar em pae');
    fetch(`/comentarios/deletarComentario/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type" : 'application/json'
        }
    }).then(()=>{
                    input_descricao.value = "";
                    selectAllComentarios();    
                    getCountComentarios();     
            });
}
function selectAllComentarios(){
        var id_anime = sessionStorage.ID_ANIME
    fetch(`/comentarios/selectAllComentario/${id_anime}`,
        {
            method: "GET",
            headers: {
                "Content-Type" : 'application/json'
            }
        }
    ).then(funciona => funciona.json())
    .then(funciona =>{
        exibirComentarios(funciona);
    })
    .catch(erro => {
        console.error('Deu erro no comentario:', erro);
    });
}
function getCountComentarios(){
    var id_anime = sessionStorage.ID_ANIME
    console.log("Id anime get count"+id_anime)
    fetch(`/comentarios/selectCountComentarios/${id_anime}`,
        {
            method: "GET",
            headers: {
                "Content-Type" : 'application/json'
            }
        }
    ).then(funciona => funciona.json())
    .then(funciona =>{
        exibirCountComentarios(funciona);
    })
    .catch(erro => {
        console.error('Deu erro no comentario:', erro);
    });
}
function exibirComentarios(funciona) {
    console.log(funciona);
    var id_usuario = sessionStorage.ID_USUARIO;

    if (funciona.length <= 0) {
        comentarios.innerHTML = `
            <div class="comentario-container">
                <h3>Nenhum comentário ainda</h3>
                <p>Seja o primeiro a compartilhar sua opinião ou deixar uma mensagem!</p>
                <span class="icone-comentario">💬</span>
            </div>
        `;
    } 
}
function exibirCountComentarios(resposta){
    console.log("Cheguei no exibir count")
    console.log(resposta[0].contagem);
    var contador = Number(resposta[0].contagem); 
        if(contador>0){
            countComentarios.innerHTML = 
        `
            <span><i class="bi bi-person-circle"></i> ${contador} Comentarios</span>
        `
        }  
}