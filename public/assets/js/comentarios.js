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
function apagarInput(){
    inputResp.innerHTML = ``;
}
function inputResposta(id_comentario){
    var id_comentario = id_comentario;
    console.log(id_comentario)
    inputResp.innerHTML =
     `
       <div class="boxResp">
            <input class="inputResposta" type="text" placeholder="Adicione uma Resposta..." id="input_resposta">
            <div>
                <button class="btnResposta" type="submit" onclick="apagarInput()">Cancelar</button>
                <button class="btnResposta" type="submit" onclick="inserirResposta(${id_comentario})">Enviar</button>
            </div>
       </div>
    `
}
function verificarCurtida(id_comentario,id_usuario){
   fetch(`/comentarios/verificarCurtidaByUsuario/${id_usuario}/${id_comentario}`)
   .then(dados => dados.json())
   .then(dados =>{
       if(dados.length > 0){
        console.log('vou atualizar')
        if(dados[0].status_curtida == 1){
            var statusAtual = false;
        }else{
            var statusAtual = true;
        }
        console.log('vou passar o status '+statusAtual);
            atualizarCurtida(statusAtual, id_usuario, id_comentario);
       } else {
        console.log('vou cadastrar')
           curtirComentario(id_usuario,id_comentario);
       }
   });
}
function countCurtida(id_comentario){
   fetch(`/comentarios/selectCountCurtidabyCurtida/${id_comentario}`)
   .then(dados => dados.json())
   .then(dados =>{
       if(dados.length > 0){
            curtidas.innerHTML = dados[0].curtida;
        }
   });
}


function exibirComentarios(dados){
     console.log(dados)
     var id_usuario = sessionStorage.ID_USUARIO;
    
       if(dados.length <= 0){
        comentarios.innerHTML = `
        <div class="comentario-container">
        <h3>Nenhum comentário ainda</h3>
        <p>Seja o primeiro a compartilhar sua opinião ou deixar uma mensagem!</p>
        <span class="icone-comentario">💬</span>
        </div>
        `;
       }else{
           comentarios.innerHTML = ``;
          for(var i=0;i<dados.length;i++){
            console.log(dados[i].id)
            const dataParaFormatar = dados[i].dataComentario;
            const data = new Date(dataParaFormatar);
            const formato = new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Sao_Paulo'
            });
         const dataFormatada = formato.format(data);
         var donoComentario = dados[i].fk_usuario == id_usuario;
         console.log(dados[i])
        comentarios.innerHTML += 
        `
                <div class="boxComentarios">
                    <div >
                         <img src="../assets/img/imgUpload/${dados[i].foto}" class="imgUser">
                    </div>
                    <div class="barra_img"></div>
                    <div class="descricao_comentario">
                        <div class="informacoes_usuario">
                            <span>${dados[i].nome}</span>
                            <span>${dataFormatada}</span>
                            <div id="lixeira">${donoComentario ?`<button onclick="deletarComentario(${dados[i].id_comentario})"><i class="bi bi-trash3-fill"></i></button>`:``}</div>
                            <div id="curtida">
                            <button onclick="verificarCurtida(${dados[i].id_comentario},${id_usuario})"><i class="bi bi-hand-thumbs-up"></i></button>
                            <span>${dados[i].curtidas}</span>
                            </div>
                        </div>
                        <div class="comentario">
                            <span>${dados[i].descricao_comentario}</span>
                            <div class="respostaComentario" id="inputResp"></div>
                            <div class="barra_comentario"></div>
                        </div>
                        </div>
                    </div>
                </div>
        `
        ;}
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

function curtirComentario(fk_usuario,id_comentario){
    fetch("comentarios/cadastrarCurtidaComentario",
        {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                id_usuario : fk_usuario,
                id_comentario : id_comentario
            })
        }

    ).then(function(){
        selectAllComentarios();
    });
}
function atualizarCurtida(statusAtual,fk_usuario,id_comentario){
    fetch("comentarios/atualizarCurtidaComentario",
        {
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                statusAtual : statusAtual,
                fk_usuario : fk_usuario,
                id_comentario : id_comentario
            })
        }

    ).then(function(){
        selectAllComentarios();
    });
}

