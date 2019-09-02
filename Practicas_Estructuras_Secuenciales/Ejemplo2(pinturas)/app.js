let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', costo);

function costo() {
    let metros_cuadrados = document.getElementById('metros_cuadrados').value;
    let costo_mtcuadrado = document.getElementById('costo_mtcuadrados').value;

    metros_cuadrados = Number(metros_cuadrados);
    costo_mtcuadrado = Number(costo_mtcuadrado);

    let resultado = 0;

    resultado = (metros_cuadrados * costo_mtcuadrado);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}