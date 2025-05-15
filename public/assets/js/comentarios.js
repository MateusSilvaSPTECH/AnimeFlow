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
    })
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

function exibirComentarios(funciona){
     console.log(funciona)
     var id_usuario = sessionStorage.ID_USUARIO;

       if(funciona.length == 0){
        comentarios.innerHTML = `Escreva algo`;
       }else{
         funciona.forEach( async item => {  
            console.log(item.id)
        const dataParaFormatar = item.dataComentario;
        const date = new Date(dataParaFormatar);
        const formatter = new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo'
        });
         const formattedDate = formatter.format(date);
         var donoComentario = item.fk_usuario == id_usuario;
    comentarios.innerHTML += 
        `
                <div class="boxComentarios">
                    <div class="imgUser"></div>
                    <div class="barra_img"></div>
                    <div class="descricao_comentario">
                        <div class="informacoes_usuario">
                            <span>${item.nome}</span>
                            <span>${formattedDate}</span>
                            <button class="btn_responder">Responder</button>
                            <div id="lixeira">${donoComentario ?`<button onclick="deletarComentario(${item.id})"><i class="bi bi-trash3-fill"></i></button>`:`Nao fui eu q comentei`}</div>
                        </div>
                        <div class="comentario">
                            <span>${item.descricao}</span>
                            <div class="barra_comentario"></div>
                        </div>
                        </div>
                    </div>
                </div>
        `
        ;})
       }
  
} 

// <div class="boxRespostas">
                        //     <div class="conteudo">
                        //         <div class="imgUser"></div>
                        //         <div class="descricao_comentario">
                        //             <div class="informacoes_usuario">
                        //                 <span>mateus</span>
                        //                 <span>10/19/2020</span>
                        //                 <button class="btn_responder">Responder</button>
                        //             </div>
                        //             <div class="comentario">
                        //                 <span>era legal no incio, decaiu bastante irmao</span>
                        //                 <div class="barra_comentario"></div>
                        //             </div>
                        //         </div>
                        //     </div>

function exibirCountComentarios(resposta){
    console.log(resposta[0].contagem);
    var contador = resposta[0].contagem; 
        countComentarios.innerHTML = 
        `
            <span><i class="bi bi-person-circle"></i> ${contador} Comentarios</span>
        `
    
}