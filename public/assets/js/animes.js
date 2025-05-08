function chamarAnime(){

    fetch("/animes/mostrar").then(funciona => funciona.json())
    .then(funciona =>{
        exibirAnimes(funciona);
    })
    .catch(erro => {
        console.error('Deu erro:', erro);
    });
      
    }
function exibirAnimes(resposta){
    var controle = 0;
    resposta.forEach(async item =>{
        controle +=1;
        if(controle<5){
            console.log(resposta[0])
            div_container_anime.innerHTML +=
            `
                <div class="boxAnime">
                        <div class="imgAnime">
                            <div class="blur"></div>
                            <div class="conteudoOculto">
                                <div class="boxTittleAnime">
                                    <span class="tittleAnime">${resposta[controle].titulo}</span>
                                </div>
                                <div class="avaliacao">
                                    A${resposta[controle].classificacao} 4.5(7.7K)<i class="bi bi-star-fill"></i>
                                    <span>${resposta[controle].traducao}</span>
                                    <span>500 episodios</span>
                                    <div class="btnNav">
                                        <a href="sobre_anime.html" class="btnSalvar"><i class="bi bi-bookmark"></i></a> 
                                        <a href="sobre_anime.html" class="btnSalvar"><i class="bi bi-play-fill"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="conteudoAnime">
                            <div class="tittleAnime">${resposta[controle].titulo}</div>
                            <div class="traducao">${resposta[controle].traducao}</div>
                        </div>
                    </div>
            `
        }
    })
     
}