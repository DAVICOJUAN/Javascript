let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let p_1 = document.getElementById('prod_1').value;
    let p_2 = document.getElementById('prod_2').value;
    let p_3 = document.getElementById('prod_3').value;
    let p_4 = document.getElementById('prod_4').value;
    let p_5 = document.getElementById('prod_5').value;
    let p_6 = document.getElementById('prod_6').value;
    p_1 = Number(p_1);
    p_2 = Number(p_2);
    p_3 = Number(p_3);
    p_4 = Number(p_4);
    p_5 = Number(p_5);
    p_6 = Number(p_6);
    let suma = 0;
    suma = (p_1 + p_2 + p_3 + p_4 + p_5 + p_6);
    let imprimirResltado = document.getElementById('resultado');
    if (suma >= 100) {
        imprimirResltado.innerHTML = 'Recibirá incentivo';
    } else {
        imprimirResltado.innerHTML = 'No Recibe incentivo';
    }
}