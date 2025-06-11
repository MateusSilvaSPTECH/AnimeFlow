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

function selectAllComentarios(fk_anime) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectAll():");
    
    var instrucaoSql = `
        SELECT 
    c.id AS id_comentario,
    c.descricao AS descricao_comentario,
    c.dataComentario,
    c.id_resposta,
    c.fk_usuario,
    u.nome,
    u.foto,
    COUNT(ac.id) AS curtidas
    FROM comentario c
    JOIN usuario u ON c.fk_usuario = u.id
    LEFT JOIN curtida_comentario ac 
    ON ac.fk_comentario = c.id AND ac.status_curtida = 1
    WHERE c.fk_anime = ${fk_anime}
    GROUP BY c.id, c.descricao, c.dataComentario, c.id_resposta, c.fk_usuario, u.nome, u.foto
    ORDER BY c.dataComentario DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function countComentarios(fk_anime){
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function count():");
        var instrucaoSql = 
        `
            SELECT COUNT(descricao) as contagem FROM comentario
            WHERE fk_anime = ${fk_anime};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}
function countComentariosUsuario(id_suario){
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function count():");
        var instrucaoSql = 
        `
          SELECT COUNT(id) as contador FROM comentario where fk_usuario = ${id_suario};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}
function deletarComentario(id){
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function count():");
        var instrucaoSql = 
        `
           DELETE FROM comentario WHERE id = ${id};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}
function cadastrarResposta(descricao, fk_anime, fk_usuario,id_comentario) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", descricao, fk_anime, fk_usuario);
    
    var instrucaoSql = `
        INSERT INTO comentario (descricao, fk_anime, fk_usuario,id_resposta) VALUES ('${descricao}', '${fk_anime}', '${fk_usuario}','${id_comentario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function cadastrarCurtida(fk_usuario,id_comentario) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_usuario,id_comentario);
    
    var instrucaoSql = `
        INSERT INTO curtida_comentario (status_curtida, fk_usuario, fk_comentario) VALUES (true, '${fk_usuario}', '${id_comentario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarCurtida(status, fk_usuario, id_comentario) {
    console.log("ACESSEI O Comentario MODEL\nFunção update:", status, fk_usuario, id_comentario);
    
    var instrucaoSql = `
        UPDATE curtida_comentario 
        SET status_curtida = ${status ? 1 : 0} 
        WHERE fk_usuario = ${fk_usuario} AND fk_comentario = ${id_comentario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function verificarCurtidaById(fk_usuario,id_comentario) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_usuario,id_comentario);
    
    var instrucaoSql = `
      SELECT * FROM curtida_comentario WHERE fk_usuario = ${fk_usuario} AND fk_comentario = ${id_comentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectCountCurtidasUsuario(id_usuario) {
    console.log("ACESSEI O Comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",id_usuario);
    
    var instrucaoSql = `
      select u.nome,COUNT(*) as curtida from curtida_comentario cc 
    JOIN comentario as c ON cc.fk_comentario = c.id
    JOIN usuario as u ON u.id = c.fk_usuario
    WHERE u.id = ${id_usuario}
    GROUP BY u.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar,
    selectAllComentarios,
    countComentarios,
    deletarComentario,
    cadastrarResposta,
    countComentariosUsuario,
    cadastrarCurtida,
    atualizarCurtida,
    verificarCurtidaById,
    selectCountCurtidasUsuario
};