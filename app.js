// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    let permitir = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombres === '') {
        //Verfica si se ingresó un campo vacío
        alert('Por favor, inserte un nombre');
    } else if (permitir.test(nombres)) {
        //Verifica si el nombre contiene sólo letras y espacios y lo agrega a la lista
        listaDeAmigos.push(nombres);
        listaHTML();
        limpiar();
        return
    } else {
        //Manda un mensaje si el campo estaba lleno pero no era un nombre válido
        alert('Por favor, ingresa un nombre válido');
    }
    limpiar();
}

function limpiar() {
    document.querySelector('#amigo').value = '';
}

function listaHTML(listaDeAmigos) {
    let ListaHTML = document.querySelector('ul');
    let elementosDeListaHTML = '';

    for (let i=0; i<listaDeAmigos.lenght; i++) {
        elementosDeListaHTML += '<li>' + listaDeAmigos[i] + '</li>';
    }

    ListaHTML.innerHTML = elementosDeListaHTML;


}