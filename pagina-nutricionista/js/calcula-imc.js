const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';


var pacientes = document.querySelectorAll('.paciente');

for(var i= 0; i < pacientes.length; i++){

    const paciente = pacientes[i];
    const tdPeso = paciente.querySelector('.info-peso');

    var peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log('peso invalido');
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {
        console.log('Altura invalido');
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
        
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    }
    
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }
    return false;
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }
    return false;
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);;
    
}
