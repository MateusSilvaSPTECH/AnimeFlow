var database = require("../database/config")

function selectAll(){
    console.log("acessei o selctall")
    var instrucaoSql = `
        SELECT * FROM categoria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    selectAll
};
