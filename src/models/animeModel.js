var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
    SELECT * FROM anime
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectEstacao(estacao){
    console.log("acessei o selectTemporada")
    var instrucaoSql = `
    SELECT * FROM anime WHERE estacao = '${estacao}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectIdAnime(id){
    console.log("acessei o selectId")
    var instrucaoSql = `
    SELECT * FROM anime WHERE id = '${id}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectTemporada(temporada){
    console.log("acessei o selectTemporada")
    var instrucaoSql = `
    SELECT * FROM anime WHERE estacao = '${temporada}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
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
    selectAll,
    selectEstacao,
    selectIdAnime,
    selectCategoriaAnime
};