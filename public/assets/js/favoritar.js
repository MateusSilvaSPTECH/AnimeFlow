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
        fetch(`/favoritar/selectAnimesFavortitosById/${id_usuario}`, {
        }).then(dados => dados.json())
        .then(dados =>{
            

            for(var i=0;i<dados.length;i++){
                console.log('entrei no anime com id',dados[i].fk_anime)
                console.log(dados[i].status_favorito);
                dados[i].status_favorito == true ? document.getElementsByClassName("bi-bookmark")[i].style.color = 'yellow' : document.getElementsByClassName("bi-bookmark")[i].style.color = 'white';
            }
        });
}

function verificarFavorito(id_anime){
   var id_usuario = sessionStorage.ID_USUARIO;
        fetch(`/favoritar/verificarAnimesFavoritosUsuario/${id_usuario}/${id_anime}`, {
        }).then(dados => dados.json())
        .then(dados =>{
            if(dados.length>0){
               console.log("tenho que atualizar papae")
               var statusAtual = true;
                if(dados[0].status_favorito == 1){
                    console.log("se for true");
                    statusAtual = false;
                }
                updateFavoritarAnime(id_usuario,id_anime,statusAtual);
            }else{
                favoritarAnime(id_anime);
            }
        });
    
}


