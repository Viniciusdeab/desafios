function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    /*
    if(elemento === null){
        Formas de apresentar o erro para o usuario
        alert('Elemento nçao encontrado');
        console.log('Elemento não encontrado');
        console.error('Elemento não encontrado');
    } 
    */
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.error('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
/*
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //templete string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    contador = contador + 1;
}
*/
for (i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
