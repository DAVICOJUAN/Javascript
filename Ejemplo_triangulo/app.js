let btnCalcular = document.getElementById('BtnCalcular');

//Se invoca funcion "EventListener"
eventListener();

//meto todos los objetos que tienen eventos
//Se crea la funcion eventListener para encapsular los objetos que llevaran el metodo "EventListener"

function eventListener() {
    btnCalcular.addEventListener('click', Obtener_Area);
}

function Obtener_Area() {

    //Se obtiene el valor de los input's  y se convierte su tipo de dato a Number y se le asigna el valor a la variable correpondiente.
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);

    let resultado = 0;
    resultado = (Base * Altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;
}