let btnAgregarElementos = document.getElementById('AgregarElementos');
let btnMostrarElementos = document.getElementById('MostrarElementos');
EventListener();
//Declarar
let elementos = [];
//Declarar Contador Global
let contador = 0;

function EventListener() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', CalcularMedia);
}

function AgregarElementos() {

    if (contador < 10) {
        let valorInput = document.getElementById('AgregarElemento');
        elementos[contador] = Number(valorInput.value);
        valorInput.value = "";

        contador++;
    }
}

function CalcularMedia() {
    let promedio = 0;
    for (let i = 0; i < elementos.length; i++) {
        promedio += elementos[i];
    }
    promedio /= elementos.length;
    contador = 0;
    elementos = [];

    let Imprimir = `<li class=list-group-item">El promedio de los numeros otorgados es: ${promedio}</li>`;
    document.getElementById('ListaImprimir').innerHTML = Imprimir;
}