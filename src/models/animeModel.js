var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
    SELECT * FROM anime
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
function selectIdAnime(id){
    console.log("acessei o selectId")
    var instrucaoSql = `
    SELECT * FROM anime WHERE id = '${id}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    selectAll,
    selectTemporada,
    selectIdAnime
};