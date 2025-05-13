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

function selectAllComentarios(){
    fetch("/comentarios/selectAllComentario").then(funciona => funciona.json())
    .then(funciona =>{
        exibirComentarios(funciona);
    })
    .catch(erro => {
        console.error('Deu erro no comentario:', erro);
    });
}

function exibirComentarios(funciona){
     console.log(funciona)
    funciona.forEach( async item => {  
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
    comentarios.innerHTML += 
        `
                <div class="boxComentarios">
                    <div class="imgUser"></div>
                    <div class="barra_img"></div>
                    <div class="descricao_comentario">
                        <div class="informacoes_usuario">
                            <span>${item.fk_usuario}</span>
                            <span>${formattedDate}</span>
                            <button class="btn_responder">Responder</button>
                        </div>
                        <div class="comentario">
                            <span>${item.descricao}</span>
                            <div class="barra_comentario"></div>
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
        `;})
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