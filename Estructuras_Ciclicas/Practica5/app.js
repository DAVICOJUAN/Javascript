let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let BtnCalcularTotal = document.getElementById('BtnCalcularTotal');
let contador = 0;
let contadorPrecioArticulo = 0;
EventListener();

function EventListener() {
    btnAgregarArticulo.addEventListener('click', agregarInputArticulo);
    BtnCalcularTotal.addEventListener('click', calcularTotal);
}

function agregarInputArticulo() {

    contador = contador + 1;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');
    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'Ingresa el nombre del artículo');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');

    buttonAgregarPrecio.appendChild(document.createTextNode('AgregarPrecio'));
    /* let x = document.createTextNode('AgregarPrecio');
    btnAgregarPrecio.appendChild(x);
    */

    let listaArticulos = document.getElementById('listaArticulos');
    listaArticulos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGroup);
    inputGroup.appendChild(inputArticulo);
    inputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAgregarPrecio);
    EventListenerAgregarPrecio();
}

function EventListenerAgregarPrecio() {
    let buttonAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.addEventListener('click', CrearInputPrecio);

}

function CrearInputPrecio(event) {
    contadorPrecioArticulo = contadorPrecioArticulo + 1;
    event.target.setAttribute('disabled', 'true');
    //alert('Works!!!!');


    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'form-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'Ingresa el precio del artículo');
    inputPrecioArticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`);

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;
    listaArticulos.appendChild(divCol);

    divCol.appendChild(inputGroup);
    inputGroup.appendChild(inputPrecioArticulo);
}

function calcularTotal() {
    let suma = 0;

    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);
        if (valorInput >= 200) {
            suma = suma + valorInput * 0.85;
        } else if (valorInput <= 200 && valorInput >= 100) {
            suma = suma + valorInput * 0.88;
        } else {
            suma = suma + valorInput * .90;
        }
    }
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `${suma}`;
}