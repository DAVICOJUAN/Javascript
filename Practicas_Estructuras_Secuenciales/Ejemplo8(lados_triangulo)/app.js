let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcularArea);
}

function calcularArea() {
    let ladoA = Number(document.getElementById('lado_A').value);
    let ladoB = Number(document.getElementById('lado_B').value);
    let ladoC = Number(document.getElementById('lado_C').value);

    let semiperimetro_total = 0;
    let resta_semiperimetro = 0;
    let multi_semiperimetro = 0;
    let area = 0;

    semiperimetro_total = ((ladoA + ladoB + ladoC) / 2);
    resta_semiperimetro = ((semiperimetro_total - ladoA) * (semiperimetro_total - ladoB) * (semiperimetro_total - ladoC));
    multi_semiperimetro = (semiperimetro_total * resta_semiperimetro);
    area = (Math.sqrt(multi_semiperimetro));
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = area;
}