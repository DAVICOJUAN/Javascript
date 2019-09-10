let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularDistancia);
}

function CalcularDistancia() {
    let p1x = document.getElementById('abscisa_1').value;
    let p1y = document.getElementById('ordenada_1').value;
    let p2x = document.getElementById('abscisa_2').value;
    let p2y = document.getElementById('ordenada_2').value;

    p1x = Number(p1x);
    p1y = Number(p1y);
    p2x = Number(p2x);
    p2y = Number(p2y);
    let dif1 = 0,
        dif2 = 0,
        cuadx = 0,
        cuady = 0,
        suma = 0,
        distancia = 0;
    dif1 = (p2x - p1x);
    dif2 = (p2y - p1y);
    cuadx = Math.pow(dif1, 2);
    cuady = Math.pow(dif2, 2);
    suma = (cuadx + cuady);
    distancia = Math.sqrt(suma);
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = distancia;
}