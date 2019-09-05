let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calculo);

function calculo() {
    let velocidad_movil = document.getElementById('velocidad_movil').value;
    let tiempo_movil = document.getElementById('tiempo_movil').value;
    velocidad_movil = Number(velocidad_movil);
    tiempo_movil = Number(tiempo_movil);
    let resultado = 0;
    resultado = (tiempo_movil / velocidad_movil);
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
}