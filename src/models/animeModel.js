var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
    SELECT 
        a.id,
        a.titulo,
        a.descricao,
        a.foto,
        a.logo,
        a.fundo,
        a.classificacao,
        a.traducao,
        a.estacao,
        a.dataLancamento,
        a.episodeo,
        a.temporada,
        ROUND(AVG(ac.valor),1) AS "soma",
        COUNT(ac.valor) AS "quantidade"
        FROM anime as a 
        LEFT JOIN avaliacao as ac 
        ON ac.fk_anime = a.id
        GROUP BY a.id,a.titulo,a.descricao,a.foto,a.logo,a.fundo,a.classificacao,a.traducao,a.estacao,a.dataLancamento,a.episodeo,a.temporada
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectAllEstacao(){
    console.log("acessei o selctall")
    var instrucaoSql = `
      select DISTINCT(a.estacao) as estacao from anime as a;
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
function selectAllPorEstacao(estacao){
    console.log("acessei o selctall")
    var instrucaoSql = `
    SELECT DISTINCT
        a.id,
        a.titulo,
        a.descricao,
        a.foto,
        a.logo,
        a.fundo,
        a.classificacao,
        a.traducao,
        a.estacao,
        a.dataLancamento,
        a.episodeo,
        a.temporada
        from anime as a
        JOIN anime_categoria as ac
        ON ac.fk_anime = a.id
        JOIN categoria as c
        ON c.id = ac.fk_categoria
        WHERE a.estacao = '${estacao}'
        GROUP BY a.id,a.titulo,a.descricao,a.foto,a.logo,a.fundo,
        a.classificacao,a.traducao,a.estacao,a.dataLancamento,a.episodeo,a.temporada
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function selectEstacao(estacao){
    console.log("acessei o selectTemporada")
    var instrucaoSql = `
   
SELECT a.id,
        a.titulo,
        a.descricao,
        a.foto,
        a.logo,
        a.fundo,
        a.classificacao,
        a.traducao,
        a.estacao,
        a.dataLancamento,
        a.episodeo,
        a.temporada,
        ROUND(AVG(ac.valor),1) AS "soma",
        COUNT(ac.valor) AS "quantidade"
        FROM anime as a 
        LEFT JOIN avaliacao as ac 
        ON ac.fk_anime = a.id
        WHERE a.estacao = '${estacao}'
        GROUP BY a.id,a.titulo,a.descricao,a.foto,a.logo,a.fundo,a.classificacao,a.traducao,a.estacao,a.dataLancamento,a.episodeo,a.temporada
        
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
function selectPopulares(){
    console.log("acessei o select populares")
    var instrucaoSql = `
    SELECT a.id,
        a.titulo,
        a.descricao,
        a.foto,
        a.logo,
        a.fundo,
        a.classificacao,
        a.traducao,
        a.estacao,
        a.dataLancamento,
        a.episodeo,
        a.temporada,
        ROUND(AVG(ac.valor),1) AS "soma",
        COUNT(ac.valor) AS "quantidade",
        SUM(ac.valor) AS "Valor_popularidade" FROM anime as a 
        JOIN avaliacao as ac 
        ON ac.fk_anime = a.id
        GROUP BY a.id,a.titulo,a.descricao,a.foto,a.logo,a.fundo,a.classificacao,a.traducao,a.estacao,a.dataLancamento,a.episodeo,a.temporada
        ORDER BY SUM(ac.valor) DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    selectAll,
    selectEstacao,
    selectIdAnime,
    selectAllPorCategoria,
    selectPopulares,
    selectAllEstacao,
    selectAllPorEstacao
};