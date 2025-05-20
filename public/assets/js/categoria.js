function getCategoriasAll(){
    fetch("/categorias/listaTodasCategorias", {
            method: "GET",
            headers: {
                "Content-Type" : 'application/json'
            }
        }
    ).then(resposta => resposta.json())
    .then( resposta => {
        for(var i=0; i<resposta.length;i++){
            console.log(resposta[i])
        box_categoria.innerHTML += `
        <div class="boxCategoria" id="box_categorias">
        <div class="blur"></div>
        <div class="conteudoOculto">
        <div class="boxTittleAnime">
        <button class="tittleAnime" onclick="redirecionaAnimeCategoria(${resposta[i].id})">
                        <span>${resposta[i].nome_categoria}</span>
                        </button>
                    </div>
                </div>
                </div>
        `;
        }
    })
}
function redirecionaAnimeCategoria(id_categoria){
       window.location.href = "catalogo_categoria.html";
       sessionStorage.ID_CATEGORIA = id_categoria;
}
function selectAnimebyCategoria(id_categoria){
    var id_categoria = sessionStorage.ID_CATEGORIA;
     fetch(`/animes/listarTodosPorCategoria/${id_categoria}`).then(resposta => resposta.json())
    .then(resposta =>{
        if(resposta.length>0){
               for(var i=0;i<resposta.length;i++){
                console.log(resposta[i])
                h1categoria.innerHTML = `Animes com a categoria ${resposta[i].nome_categoria}`;
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
        }else{
             h1categoria.innerHTML = `Animes com a categoria ${resposta[i].nome_categoria}`;
              div_container_anime.innerHTML +=`Não existem animes com essa categoria`;
        }
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
}
