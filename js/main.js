function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0; 

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]; 

    //template string 
    const instrumento = `#som_${tecla.classList[1]}`;

    tecla.onclick = function () {
        tocaSom(instrumento);
    }
    //console.log(contador);
    contador++; 
}