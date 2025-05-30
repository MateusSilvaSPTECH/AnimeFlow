var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
        SELECT * FROM categoria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectCategoriaFavoritas(id_usuario){
    console.log("acessei o selctall")
    var instrucaoSql = `
        SELECT c.nome_categoria,SUM(av.valor) as media FROM categoria as c
        JOIN anime_categoria as ac ON c.id = ac.fk_categoria
        JOIN anime as a ON ac.fk_anime = a.id
        JOIN avaliacao as av ON av.fk_anime = a.id
        JOIN usuario as u ON u.id = av.fk_usuario
        WHERE u.id = ${id_usuario} 
        GROUP BY c.nome_categoria 
        ORDER BY media DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    selectAll,
    selectCategoriaFavoritas
};
