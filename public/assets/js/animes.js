function chamarAnime(){

    fetch("/animes/listarTodos").then(funciona => funciona.json())
    .then(funciona =>{
        exibirAnimesAll(funciona);
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
      
    }

function selectTemporada(){
    var temporada = `Outono`;
    fetch(`/animes/listarPorTemporada/${temporada}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }
        
    ).then(funciona => funciona.json())
    
    .then(funciona =>{
        exibirAnimes(funciona);
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}
function selectIdAnime(id){
    fetch(`/animes/listarIdAnime/${id}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }
        
    ).then(funciona => funciona.json())
    .then(funciona =>{
    console.log(funciona)
    funciona.forEach( async item => {
        div_sobre_anime.innerHTML =
        `
            <div class="boxConteudo">
            <div class="cabecalho_anime">
                <div class="img_anime"></div>
                <div class="informacoes_anime">
                    <div class="tittle_anime">
                        <h1>${item.titulo}</h1>
                        <span>2025</span>
                    </div>
                    <div class="avaliacao_anime">
                        <span class="boxSistema">
                            <div class="estrelas">
                                <input type="radio" name="estrela" id="input_vazio" value="" checked>

                                <label for="estrela_1"><i class="bi opcao bi-star-fill"></i></label>
                                <input type="radio" name="estrela" id="estrela_1" value="1" onclick="verEstrelas()">

                                <label for="estrela_2"><i class="bi opcao bi-star-fill"></i></label>
                                <input type="radio" name="estrela" id="estrela_2" value="2" onclick="verEstrelas()">

                                <label for="estrela_3"><i class="bi opcao bi-star-fill"></i></label>
                                <input type="radio" name="estrela" id="estrela_3" value="3" onclick="verEstrelas()">

                                <label for="estrela_4"><i class="bi opcao bi-star-fill"></i></label>
                                <input type="radio" name="estrela" id="estrela_4" value="4" onclick="verEstrelas()">

                                <label for="estrela_5"><i class="bi opcao bi-star-fill"></i></label>
                                <input type="radio" name="estrela" id="estrela_5" value="5" onclick="verEstrelas()">
                            </div>
                        </span>
                        <span>4.5(49.1k)</span>
                    </div>
                    <div class="categoria_anime" id="categoria">
                    
                    </div>
                </div>
            </div>
            <div class="descricao_anime">
                <span>
                    ${item.descricao}
                </span>
            </div>
                        <div class="trailer_episodeos">
                <div class="trailer">
                    <!-- <iframe src="https://www.youtube.com/embed/f8NOmzN788w?si=iKgb17iQfjo3eo4h"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
                </div>
                <div class="episodiosTemps">
                    <h1>12 Episodios</h1>
                    <h1>1 Temporada</h1>
                </div>
            </div>
            <!-- <div class="carrosel"></div> -->
            <div class="publicar_comentarios">
                <div class="tittle">
                    <span><i class="bi bi-chat-fill"></i></span>
                    <span>Deixe seu comentario</span>
                </div>
                <div class="form_comentario">
                  <textarea id="input_descricao"></textarea>
                    <button class="btn" onclick="cadastrarComentario()">Publicar Comentario</button>
                </div>
            </div>
            <div class="listar_comentarios" id="comentarios">
                <div class="tittle_listar_comentarios" id="countComentarios">
                    <span><i class="bi bi-person-circle"></i> Comentarios</span>
                </div>
                <div class="barra"></div>
            
            </div>
        `
    }
    );
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}
function sobre_animeid(id){
    sessionStorage.ID_ANIME = id;
        window.location.href = `sobre_anime.html`
}
function exibirAnimes(resposta){
    var controle = 0;
    for(var i =0;i<resposta.length;i++){
        id = resposta[i].id
        controle +=1;
            if(controle<5){
                 div_container_anime.innerHTML +=
            `
            
                <div class="boxAnime">
                    <div class="imgAnime">
                        <img src="../assets/img/image.png">
                    </div>

                    <div class="blur"></div>

                    <div class="conteudoOculto">

                        <div class="boxTittleAnime">
                            <span class="tittleAnime">${resposta[i].titulo}</span>
                        </div>

                        <div class="avaliacao">
                            A${resposta[i].classificacao} 4.5(7.7K)<i class="bi bi-star-fill"></i>
                            <span>${resposta[i].traducao}</span>
                            <span>500 episodios</span>

                            <div class="btnNav">
                                <a href="sobre_anime.html" class="btnSalvar"><i class="bi bi-bookmark"></i></a> 
                                <a onclick="sobre_animeid(${resposta[i].id})" class="btnSalvar"><i class="bi bi-play-fill"></i></a>        
                            </div>
                        </div>

                    </div>

                    <div class="conteudoAnime">
                        <div class="tittleAnime">${resposta[i].titulo}</div>
                        <div class="traducao">${resposta[i].traducao}</div>
                    </div>
                </div>
            `
            }
        }
    
     
}
function exibirAnimesAll(resposta){
    var controle = 0;
    for(var i =0;i<resposta.length;i++){
        id = resposta[i].id
        controle +=1;
     

            div_container_anime.innerHTML +=
            `
            
                <div class="boxAnime">
                    <div class="imgAnime">
                        <img src="../assets/img/image.png">
                    </div>

                    <div class="blur"></div>

                    <div class="conteudoOculto">

                        <div class="boxTittleAnime">
                            <span class="tittleAnime">${resposta[i].titulo}</span>
                        </div>

                        <div class="avaliacao">
                            A${resposta[i].classificacao} 4.5(7.7K)<i class="bi bi-star-fill"></i>
                            <span>${resposta[i].traducao}</span>
                            <span>500 episodios</span>

                            <div class="btnNav">
                                <a href="sobre_anime.html" class="btnSalvar"><i class="bi bi-bookmark"></i></a> 
                                <a onclick="sobre_animeid(${resposta[i].id})" class="btnSalvar"><i class="bi bi-play-fill"></i></a>        
                            </div>
                        </div>

                    </div>

                    <div class="conteudoAnime">
                        <div class="tittleAnime">${resposta[i].titulo}</div>
                        <div class="traducao">${resposta[i].traducao}</div>
                    </div>
                </div>
            `
        }
    
     
}
function zerarId()
{
    sessionStorage.ID_ANIME = undefined;
    window.location.href = `catalogo.html`
}
function getCategoriasAnime(){
    var id = sessionStorage.ID_ANIME;
     fetch(`/animes/listarAnimeCategoria/${id}`).then(funciona => funciona.json())
    .then(funciona =>{
        for(var i=0;i<funciona.length;i++){
            console.log(funciona[i].nome_categoria)
            categoria.innerHTML += 
        `
            <span>${funciona[i].nome_categoria}</span>
        `
        }
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}