var animeModel = require("../models/animeModel");
function selectAll(){
animeModel.selectAll().then(
    function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
    })
}

module.exports = {
    selectAll
}