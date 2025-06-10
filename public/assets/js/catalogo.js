function slidesAleatorios() {
    fetch("animes/listarTodos", {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(dados => dados.json())
    .then(dados => {
        console.log(dados)
        var numerosNoSLide = [];
        const container = document.getElementById("slides-container");
        var maiorID = dados.length;
        
        while (numerosNoSLide.length<4) {
            console.log(numerosNoSLide.length)
            var aleatorio = parseInt(Math.random() * maiorID);

            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            if(!numerosNoSLide.includes(aleatorio)){
                console.log('estou escrevendo um anime')
                slide.innerHTML = `
                <section  style="background-image: 
                    linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
                    linear-gradient(to top, rgba(0, 0, 0, 1), transparent),
                    url('../assets/img/imgFundo/${dados[aleatorio].fundo || ''}');
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: 550px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                ">
                    <div class="boxConteudo">
                        <div class="logo">
                            <img src="../assets/img/LogoAnime/${dados[aleatorio].logo || ''}">
                        </div>
                        <div class="legendado">${dados[aleatorio].classificacao} ${dados[aleatorio].traducao}</div>
                        <div class="descricao">${dados[aleatorio].descricao}</div>
                        <div class="box_btn">
                            <a onclick="sobre_animeid(${dados[aleatorio].id})" class="btnConhecer">Conheça tudo sobre o anime</a> 
                            <a onclick="verificarFavorito(${dados[aleatorio].id})" class="btnSalvar"><i class="bi bi-bookmark" id="favorito${dados[aleatorio].id}"></i></a> 
                        </div>
                    </div>
                </section>
            `;
            numerosNoSLide.push(aleatorio)
            container.appendChild(slide);
            }
        }
        new Swiper(".mySwiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            }
        });
    });
    
}

