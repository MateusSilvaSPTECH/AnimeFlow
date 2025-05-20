function cadastrarAvaliacao(valorAvalicao) {
    console.log('chamou');
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
        });
}
function selectAvaliacao(){
    var id_anime = sessionStorage.ID_ANIME;
    fetch(`avaliacao/selectAvaliacao/${id_anime}`).then(dados => dados.json())
    .then(dados =>{
        console.log(dados)
         mediaCountAvaliacao.innerHTML = 
        `
            ${dados[0].media}(${dados[0].quantidade})
        `;
    })
}
    function verEstrelas() {
        var valorAvalicao = 0;
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

        cadastrarAvaliacao(valorAvalicao);
    }