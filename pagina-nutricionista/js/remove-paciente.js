
/*
var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
}); */

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    if(event.target.tagName == 'TD'){
    setTimeout(function(){
        event.target.parentNode.remove();
        },500);
    }
});

