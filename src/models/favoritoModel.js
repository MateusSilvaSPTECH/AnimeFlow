var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function favoritarAnime(status_favorito, id_anime, id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarAvaliacao():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO favoritar(status_favorito,fk_anime,fk_usuario) VALUES (${status_favorito}, '${id_anime}', '${id_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function updateFavoritarAnime(status_favorito, id_anime, id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarAvaliacao():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE favoritar SET status_favorito = ${status_favorito} WHERE fk_usuario = ${id_usuario} and fk_anime = ${id_anime};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectAnimesFavoritosByUsuario(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarAvaliacao():");
    
    var instrucaoSql = `
        select * from favoritar WHERE fk_usuario = ${id_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function countFavoritosUsuario(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarAvaliacao():");
    
    var instrucaoSql = `
        SELECT COUNT(id) as contador FROM favoritar where fk_usuario = ${id_usuario} AND status_favorito = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function verificarAnimesFavoritosUsuario(id_usuario,id_anime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarAvaliacao():");
    var instrucaoSql = `     
        select * from favoritar WHERE fk_usuario = ${id_usuario} and fk_anime = ${id_anime};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    favoritarAnime,
    updateFavoritarAnime,
    selectAnimesFavoritosByUsuario,
    verificarAnimesFavoritosUsuario,
    countFavoritosUsuario
};
