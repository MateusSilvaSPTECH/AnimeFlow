var sub_menu = document.getElementById("drop_menu");
function mostrarDropDown() {
    console.log('entrei na fuc');
    sub_menu.classList.toggle("open_menu");
    console.log('entrei na passei');
}

var sub_menu_categoria = document.getElementById("drop_menu_categoria");

function mostrarCategorias() {
    console.log('entrei na fuc');
    sub_menu_categoria.classList.toggle("open_menu_categoria");
    console.log('entrei na passei');
}

var sub_menu_estacao = document.getElementById("drop_menu_estacao");
function mostrarestacoes() {
    console.log('entrei na fuc');
    sub_menu_estacao.classList.toggle("open_menu_estacao");
    console.log('entrei na passei');
}