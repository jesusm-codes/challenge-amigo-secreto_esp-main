// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nombres = 0;


function enlistar(nombres) {
    let nombres = document.getElementById('amigo').value;
    let permitir = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombres === '') {
        //Verfica si se ingresó un campo vacío
        asignarTextoElemento('h2','Por favor, ingresa un nombre');
    } else if (permitir.test(nombres)) {
        //Verifica si el nombre contiene sólo letras y espacios y lo agrega a la lista
        listaDeAmigos.push(nombres);    
        asignarTextoElemento('h2','Digite el nombre de sus amigos');
        return
    } else {
        //Manda un mensaje si el campo estaba lleno pero no era un nombre válido
        asignarTextoElemento('h2','Por favor, ingresa un nombre válido');
    }
    limpiar();
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiar() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    enlistar();
}
