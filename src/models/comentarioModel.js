var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(descricao, fk_anime, fk_usuario) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", descricao, fk_anime, fk_usuario);
    
    var instrucaoSql = `
        INSERT INTO comentario (descricao, fk_anime, fk_usuario) VALUES ('${descricao}', '${fk_anime}', '${fk_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selectAllComentarios() {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectAll():");
    
    var instrucaoSql = `
        SELECT * FROM comentario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar,
    selectAllComentarios
};