let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', ObtenerArea);

}

function ObtenerArea() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);

    let resultadoAreaRectangulo = 0,
        resultadoAreaTriangulo = 0,
        resultadosSumaAreas = 0;

    resultadoAreaRectangulo = ladoB * ladoC;
    resultadoAreaTriangulo = ((ladoA - ladoC) * ladoB) / 2;

    resultadoSumaAreas = resultadoAreaRectangulo + resultadoAreaTriangulo;
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultadoSumaAreas;
}