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
            console.log("cadastrou")
            });
}

function updateFavoritarAnime(id_anime) {
        fetch("/favoritar/updateFavoritarAnime", {
            method: "PUT",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                status_favorito : true,
                id_anime : id_anime,
                id_usuario : sessionStorage.ID_USUARIO
            })
        }).then(()=>{
            console.log("cadastrou")
            });
}

function selectAnimesFavoritosByUsuario() {
    var id_usuario = sessionStorage.ID_USUARIO;
        fetch(`/favoritar/selectAnimesFavortitosById/${id_usuario}`, {
        }).then(dados => dados.json())
        .then(dados =>{
            console.log(dados);
        });
}

function verificarFavorito(id_anime){
   var id_usuario = sessionStorage.ID_USUARIO;
        fetch(`/favoritar/verificarAnimesFavoritosUsuario/${id_usuario}/${id_anime}`, {
        }).then(dados => dados.json())
        .then(dados =>{
            if(dados.length>0){
               console.log("tenho que atualizar papae")
               var statusAtual = false;
                if(dados[0].status_favorito == true){
                    console.log("se for true");
                    statusAtual = true;
                }else{
                    console.log("se for false");
                    statusAtual = false;
                }
                updateFavoritarAnime(id_usuario,id_anime,statusAtual);
            }else{
                favoritarAnime(id_anime);
            }
        });
    
}


