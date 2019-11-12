let btnAgregarElementos = document.getElementById('AgregarElementos');
let btnMostrarElementos = document.getElementById('MostrarElementos');
EventListener();
//Declarar
let elementos = [];
//Declarar Contador Global
let contador = 0;

function EventListener() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', MostrarElementos);
}

function AgregarElementos() {

    if (contador < 10) {
        let valorInput = document.getElementById('AgregarElemento');
        elementos[contador] = valorInput.value;
        valorInput.value = "";

        contador++;
    }
}

function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < elementos.length; i++) {
        informacionImprimir += ` <li class="list-group-item">${elementos[i]} </li>`;
    }
    contador = 0;
    document.getElementById('ListaImprimir').innerHTML = informacionImprimir;
}