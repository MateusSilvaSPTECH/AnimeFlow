function cadastrarAvaliacao(valorAvalicao) {
    console.log('chamou cadastrar');
        fetch("/avaliacao/cadastrarAvaliacao", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                valorAvalicao : valorAvalicao,
                id_anime : sessionStorage.ID_ANIME,
                id_usuario : sessionStorage.ID_USUARIO
            })
        }).then(()=>{
                selectAvaliacao();  
            });
}
function updateAvaliacao(valorAvalicao) {
    console.log('chamou atualizar');
        fetch("/avaliacao/updateAvaliacao", {
            method: "PUT",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify ({
                valorAvalicao : valorAvalicao,
                id_anime : sessionStorage.ID_ANIME,
                id_usuario : sessionStorage.ID_USUARIO
            })
        }).then(()=>{
                    selectAvaliacao();  
            });
}
 var fks_usuarios = [];
function selectAvaliacao(){
    var id_anime = sessionStorage.ID_ANIME;
   
    fetch(`avaliacao/selectAvaliacao/${id_anime}`).then(dados => dados.json())
    .then(dados =>{
        console.log(dados)
        var qtdAvaliacao = 0;
        var media = 0;
        for(var i=0;i<dados.length;i++){
            media += Number(dados[i].soma);
            qtdAvaliacao += Number(dados[i].quantidade);
            fks_usuarios[i] = dados[i].fk_usuario;
        }
               if(isNaN(media)){
            media = 0;
         }
        media = media/qtdAvaliacao;
         mediaCountAvaliacao.innerHTML = 
        `
            ${media.toFixed(1)}(${qtdAvaliacao})
        `;

    });
}
    function verEstrelas() {
        var id_usuario = sessionStorage.ID_USUARIO;
        var valorAvalicao = 0;
        var achouId = false;
        if (document.getElementById('estrela_1').checked) {
            console.log('peguei o valor 1');
            valorAvalicao = 1;
        }else if(document.getElementById('estrela_2').checked){
            console.log('peguei o valor 2');
            valorAvalicao = 2;
        }
        else if(document.getElementById('estrela_3').checked){
            console.log('peguei o valor 3');
            valorAvalicao = 3;
        }
        else if(document.getElementById('estrela_4').checked){
            console.log('peguei o valor 4');
            valorAvalicao = 4;
        }
        else if(document.getElementById('estrela_5').checked){
                console.log('peguei o valor 5');
                valorAvalicao = 5;
        }

         for(var i=0;i<fks_usuarios.length;i++){
            console.log(fks_usuarios[i]);
            console.log(id_usuario)
            if(fks_usuarios[i] == id_usuario){
            achouId = true;
             break;
            }
        }

        if(achouId){
            updateAvaliacao(valorAvalicao);
        }else{
            cadastrarAvaliacao(valorAvalicao);
        }
    }