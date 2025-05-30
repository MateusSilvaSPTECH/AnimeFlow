function mediaAvaliacao(){
    var id_usuario = sessionStorage.ID_USUARIO;
    fetch(`dashboard/mediaAvaliacao/${id_usuario}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }).then(dados => dados.json())
    .then(dados =>{
        console.log(dados[0].media);
        kpi_mediaAvaliacao.innerHTML = `${dados[0].media}`;
    });
}

function countComentariosUser(){
    var id_usuario = sessionStorage.ID_USUARIO;
    fetch(`dashboard/selectCountComentariosUsuario/${id_usuario}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }).then(dados => dados.json())
    .then(dados =>{
        console.log(dados[0].contador);
        kpi_contagemComentarios.innerHTML = `${dados[0].contador}`;
    });
}
function countFavoritosUser(){
    var id_usuario = sessionStorage.ID_USUARIO;
    fetch(`dashboard/selectCountFavoritosUsuario/${id_usuario}`,{
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    }).then(dados => dados.json())
    .then(dados =>{
        console.log(dados[0].contador);
        kpi_contagemFavoritos.innerHTML = `${dados[0].contador}`;
    });
}
