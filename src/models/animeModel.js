var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
    SELECT * FROM anime
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectAllPorCategoria(id_categoria){
    console.log("acessei o selctall")
    var instrucaoSql = `
    select a.*,c.nome_categoria from anime as a
    JOIN anime_categoria as ac
    ON ac.fk_anime = a.id
    JOIN categoria as c
    ON c.id = ac.fk_categoria
    WHERE c.id = ${id_categoria};
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
module.exports = {
    selectAll,
    selectEstacao,
    selectIdAnime,
    selectAllPorCategoria
};