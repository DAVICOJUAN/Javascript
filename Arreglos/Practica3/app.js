let btnIngresarDatos = document.getElementById('IngresarDatos');

let elementos = [];
let contador = 0;

EventListener();

function EventListener() {
    btnIngresarDatos.addEventListener('click', AgregarElementos)
}

function AgregarElementos() {
    let valor = document.getElementById('InputNumero');
    let i = 0;
    for (let i = 0; i < elementos.length; i++) {
        if (Number(valor.value) === elementos[i]) return
    }
    elementos[i] = valor.value;
    let DatosImprimir = '';

    for (let x = 0; x < elementos.length; x++) {
        DatosImprimir += `<li class="list-group-item">${elementos[x]}</li>`;
    }

    document.getElementById('ListaImprimir').innerHTML = DatosImprimir;
}