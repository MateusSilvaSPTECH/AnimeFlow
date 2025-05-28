function chamarAnime(){
    fetch("/animes/listarTodos").then(resposta => resposta.json())
    .then(resposta =>{
        var controle = 0;
    for(var i =0;i<resposta.length;i++){
        id = resposta[i].id
        controle +=1;
        
        console.log(resposta[i].foto)

            div_container_anime.innerHTML +=
            `
            
                 <div class="boxAnime">
                    <div class="imgAnime">
                         <img src="../assets/img/fotoAnime/${resposta[i].foto}">
                    </div>

                    <div class="blur"></div>

                    <div class="conteudoOculto">

                        <div class="boxTittleAnime">
                            <span class="tittleAnime">${resposta[i].titulo}</span>
                        </div>

                        <div class="avaliacao">
                            A${resposta[i].classificacao} 4.5(7.7K)<i class="bi bi-star-fill"></i>
                            <span>${resposta[i].traducao}</span>
                            <span>${resposta[i].episodeo} episodios</span>
                            <div class="btnNav">
                                <a onclick="verificarFavorito(${resposta[i].id})" class="btnSalvar"><i class="bi bi-bookmark" id="favorito${resposta[i].id}"></i></a> 
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
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
      
    }

function selectEstacao(){
    const data = new Date();
    const mesAtual = Number(data.getMonth()+1);
    console.log(mesAtual)
    var estacao = ``
    if(mesAtual>=3 || mesAtual<=5){
        estacao = "Primavera"
    }else if(mesAtual>=6|| mesAtual<=8){
        estacao = "Verão"
    }else if(mesAtual>=9 || mesAtual<=11){
        estacao = "Outono"
    }else{
        estacao = "Inverno"
    }
    estacao = "Outono"
    console.log(estacao)
    fetch(`/animes/listarPorEstacao/${estacao}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }
        
    ).then(resposta => resposta.json())
    .then(resposta =>{
         var controle = 0;
    for(var i =0;i<resposta.length;i++){
        id = resposta[i].id
        console.log(resposta[i]);
        controle +=1;
            if(controle<5){
                h1Estacao.innerHTML = `
                    Conheça os melhores animes da temporada de ${estacao}
                `;
                 div_container_anime.innerHTML +=
            `
                <div class="boxAnime">
                    <div class="imgAnime">
                         <img src="../assets/img/fotoAnime/${resposta[i].foto}">
                    </div>
                    <div class="blur"></div>
                    <div class="conteudoOculto">
                        <div class="boxTittleAnime">
                            <span class="tittleAnime">${resposta[i].titulo}</span>
                        </div>
                        <div class="avaliacao">
                            A${resposta[i].classificacao}<br>
                            <span>${resposta[i].soma}(${resposta[i].quantidade})<i class="bi bi-star-fill"></i></span>
                            <span>${resposta[i].traducao}</span>
                            <span>${resposta[i].episodeo} episodios</span>

                            <div class="btnNav">
                                <a onclick="verificarFavorito(${resposta[i].id})" class="btnSalvar"><i class="bi bi-bookmark" id="favorito${resposta[i].id}"></i></a> 
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
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}

function selectPopulares(){
    fetch(`/animes/listarPopulares`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }).then(resposta => resposta.json())
    .then(resposta =>{
        var controle = 0;
        for(var i =0;i<resposta.length;i++){
        id = resposta[i].id
        console.log(resposta[i])
        controle +=1;
            if(controle<5){
                h1Popularidade.innerHTML = `
                    Conheça os animes mais populares entre nossos usuarios
                `;
                 div_container_anime_popularidade.innerHTML +=
            `
                <div class="boxAnime">
                    <div class="imgAnime">
                         <img src="../assets/img/fotoAnime/${resposta[i].foto}">
                    </div>
                    <div class="blur"></div>
                    <div class="conteudoOculto">
                        <div class="boxTittleAnime">
                            <span class="tittleAnime">${resposta[i].titulo}</span>
                        </div>
                        <div class="avaliacao">
                            A${resposta[i].classificacao}<br>
                            <span>${resposta[i].soma}(${resposta[i].quantidade})<i class="bi bi-star-fill"></i></span>
                            <span>${resposta[i].traducao}</span>
                            <span>${resposta[i].episodeo} episodios</span>

                            <div class="btnNav">
                                <a onclick="verificarFavorito(${resposta[i].id})" class="btnSalvar"><i class="bi bi-bookmark" id="favorito${resposta[i].id}"></i></a> 
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
    }).then(funciona => funciona.json())
    .then(funciona =>{
    console.log(funciona)
    funciona.forEach( item => {
        div_sobre_anime.innerHTML =
        `
            <div class="boxConteudo">
            <div class="cabecalho_anime">
                <div class="boxAnime">
                    <div class="imgAnime">
                         <img src="../assets/img/fotoAnime/${item.foto}">
                    </div>
                    </div>
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
                        <span id="mediaCountAvaliacao"></span>
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
                    <h1>${item.episodeo} Episodios</h1>
                    <h1>${item.temporada} Temporada</h1>
                </div>
            </div>
           
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
            <div class="tittle_listar_comentarios" id="countComentarios">
                <span><i class="bi bi-person-circle"></i> Comentarios</span>
            </div>
            <div class="listar_comentarios" id="comentarios">
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


function zerarId()
{
    sessionStorage.ID_ANIME = undefined;
    window.location.href = `catalogo.html`;
}
function getCategoriasAnime(){
    var id = sessionStorage.ID_ANIME;
     fetch(`/categoria_anime/listarAnimeCategoria/${id}`).then(funciona => funciona.json())
    .then(funciona =>{
        console.log(funciona)
        for(var i=0;i<funciona.length;i++){
            console.log(funciona[i].nome_categoria)
            categoria.innerHTML += 
        `
             <a onclick="redirecionaAnimeCategoria(${funciona[i].fk_categoria})"><span>${funciona[i].nome_categoria}</span></a>
        `
        }
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}
function redirecionaAnimeEstacao(estacao){
    window.location.href = "catalogo_estacao.html";
    sessionStorage.ESTACAO = estacao;
}
function getEstacoesAll(){
    fetch("/animes/listaTodasEstacoes", {
            method: "GET",
            headers: {
                "Content-Type" : 'application/json'
            }
        }
    ).then(resposta => resposta.json())
    .then( resposta => {
        var html = `<div class="rowEs">`;
        for(var i=0; i<resposta.length;i++){
            console.log(resposta[i])
        html += `<a onclick="redirecionaAnimeEstacao('${resposta[i].estacao}')">${resposta[i].estacao}</a>`;
    }
    html += `</div>`;
    estacoes.innerHTML = html; 
    })
}

function selectAnimebyEstacao(){
    console.log("olha eu ai ")
    var estacao = sessionStorage.ESTACAO;
     fetch(`/animes/listaPorEstacao/${estacao}`).then(resposta => resposta.json())
    .then(resposta =>{
        if(resposta.length>0){
               for(var i=0;i<resposta.length;i++){
                console.log(resposta[i])
                h1estacao.innerHTML = `Animes com a estação ${resposta[i].estacao}`;
              div_container_anime.innerHTML +=
                `
                     <div class="boxAnime">
                        <div class="imgAnime">
                             <img src="../assets/img/fotoAnime/${resposta[i].foto}">
                        </div>

                        <div class="blur"></div>

                        <div class="conteudoOculto">

                            <div class="boxTittleAnime">
                                <span class="tittleAnime">${resposta[i].titulo}</span>
                            </div>

                            <div class="avaliacao">
                                A${resposta[i].classificacao} 4.5(7.7K)<i class="bi bi-star-fill"></i>
                                <span>${resposta[i].traducao}</span>
                                <span>${resposta[i].episodeo} episodios</span>

                                <div class="btnNav">
                                    <a onclick="${verificarFavorito(resposta[i].id)}" class="btnSalvar"><i class="bi bi-bookmark" id="favorito${resposta[i].id}"></i></a> 
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
        }else{
          
            div_container_anime.innerHTML += `
            <div class="noAnimeMessage">
                <section class="mostrar_tudo">
                    <div class="container">
                        <div class="img">
                            <img src="assets/img/anieecerto.png" alt="">
                        </div>
                        <div class="info">
                            <span>
                                Infelizmente não temos animes com essa categoria, Veja nosso catálogo completo.
                            </span>
                        </div>
                        <div class="btn_tudo">
                            <a href="catalogo_completo.html">VER TUDO</a>
                        </div>
                    </div>
                </section>
            </div>`;
        }
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}

