var sub_menu_categoria = undefined;
var sub_menu = undefined;
var sub_menu_estacao = undefined;
function fecharDropDown(){
    if(sub_menu_estacao != undefined){
        sub_menu_estacao.classList.remove("open_menu_estacao");
    }
    if(sub_menu_categoria != undefined){
         sub_menu_categoria.classList.remove("open_menu_categoria");
    }
    if(sub_menu != undefined){
         sub_menu.classList.remove("open_menu");
    }  
}
function mostrarDropDown() {
    sub_menu = document.getElementById("drop_menu");
    sub_menu.classList.toggle("open_menu");
    sub_menu_estacao.classList.remove("open_menu_estacao");
    sub_menu_categoria.classList.remove("open_menu_categoria");
}

function mostrarCategorias() {
    sub_menu_categoria = document.getElementById("drop_menu_categoria");
    sub_menu_categoria.classList.toggle("open_menu_categoria");
     sub_menu.classList.remove("open_menu");
     sub_menu_estacao.classList.remove("open_menu_estacao");
}

function mostrarestacoes() {
    sub_menu_estacao = document.getElementById("drop_menu_estacao");
    sub_menu_estacao.classList.toggle("open_menu_estacao");
    sub_menu.classList.remove("open_menu");
    sub_menu_categoria.classList.remove("open_menu_categoria");
}


