var database = require("../database/config")

function selectCategoriaAnime(id){
    console.log("acessei o selectCategoriaAnime")
    var instrucaoSql = `
    SELECT  c.nome_categoria FROM anime_categoria as ac
    JOIN anime as a 
    ON a.id = ac.fk_anime
    JOIN categoria as c
    ON c.id = ac.fk_categoria WHERE a.id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    selectCategoriaAnime
};