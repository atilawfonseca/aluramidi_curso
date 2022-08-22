function tocaSom(ElementoAudio){

    const audio = document.querySelector(ElementoAudio);
    //audio = se o elemento não for null
    if(audio && audio.localName === 'audio')
    {
        audio.play();
    }
    else {
        console.log("Elemento nulo ou não é um elemento de audio");
    }
    

    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]; 
    const instrumento = `#som_${tecla.classList[1]}`; //template string

    tecla.onclick = function () {
        tocaSom(instrumento);
    }
    tecla.onkeydown = function (evento) {
        console.log(evento.code == 'Space' || evento.code == 'Enter');
        if(evento.code == 'Space' || evento.code == 'Enter')
        { 
            tecla.classList.add['ativa'];
        }
        
    }
    //comparador === vai verificar se o valor e o tipo são iguais
    // quanto o operador == vai comparar apenas o valor. 
    tecla.onkeyup = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter')
        {
            tecla.classList.remove['ativa'];
        }
    }
}
