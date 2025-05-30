function favoritarAnime(id_anime) {
        fetch("/favoritar/favoritarAnime", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                status_favorito : true,
                id_anime : id_anime,
                id_usuario : sessionStorage.ID_USUARIO
            })
        }).then(()=>{
            console.log("cadastrou");
            selectAnimesFavoritosByUsuario();
            });
}

function updateFavoritarAnime(id_usuario,id_anime,statusAtual) {
    console.log("dentro do update")
    console.log(statusAtual)
        fetch("/favoritar/updateFavoritarAnime", {
            method: "PUT",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                status_favorito : statusAtual,
                id_anime : id_anime,
                id_usuario : id_usuario
            })
        }).then(()=>{
            console.log("ATUALIZOU");
            selectAnimesFavoritosByUsuario();
            });
}

function selectAnimesFavoritosByUsuario() {
    var id_usuario = sessionStorage.ID_USUARIO;
        fetch(`/favoritar/selectAnimesFavoritosById/${id_usuario}`, {
        }).then(dados => dados.json())
        .then(dados =>{
            for(var i=0;i<dados.length;i++){
                var idAnime = dados[i].fk_anime;
                var icone = document.getElementById(`favorito${idAnime}`);
                var favorito = dados[i].status_favorito;
                if (icone) {
                    icone.style.color = favorito ? 'yellow' : 'white';
                } else {
                    console.log(`Elemento com id favorito${idAnime} não encontrado`);
                }
            }
        });
}

function verificarFavorito(id_anime){
   var id_usuario = sessionStorage.ID_USUARIO;
   const icone = document.getElementById(`favorito${id_anime}`);
    console.log(id_anime);
    console.log(id_usuario)
   fetch(`/favoritar/verificarAnimesFavoritosUsuario/${id_usuario}/${id_anime}`)
   .then(dados => dados.json())
   .then(dados =>{
    console.log(dados);
       if(dados.length > 0){
           var statusAtual = !dados[0].status_favorito;
           updateFavoritarAnime(id_usuario, id_anime, statusAtual);
           console.log(icone.id)
           icone.style.color = statusAtual ? 'yellow' : 'white';
       } else {
           favoritarAnime(id_anime);
           icone.style.color = 'yellow';
       }
   });
}



