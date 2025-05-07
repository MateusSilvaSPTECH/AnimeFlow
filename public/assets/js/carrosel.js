var contador = 1;
document.getElementById("input_radio1").checked = true;

setInterval(function(){
    nextImage();
},5000);

function nextImage(){
    contador++
    if(contador > 4){
        contador = 1
    }
    document.getElementById("input_radio"+contador).checked = true;
}