let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularPago);
}

function CalcularPago() {
    let largo = document.getElementById('largo').value;
    let ancho = document.getElementById('ancho').value;
    let prof = document.getElementById('profundo').value;

    largo = Number(largo);
    ancho = Number(ancho);
    prof = Number(prof);

    let dimension = 0,
        costo = 0;
    dimension = (largo * ancho * prof) * 1000;
    costo = (dimension * 14.1);
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = costo;

}