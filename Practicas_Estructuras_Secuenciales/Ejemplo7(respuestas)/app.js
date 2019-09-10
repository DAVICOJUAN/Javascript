let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', CalcularPuntaje);
}

function CalcularPuntaje() {
    let re_corr = Number(document.getElementById('respuestas_correctas').value);
    let re_incor = Number(document.getElementById('respuestas_incorrectas').value);
    let re_bco = Number(document.getElementById('respuestas_en_blanco').value);

    let correctas = 0,
        incorrectas = 0,
        enblanco = 0,
        total = 0;
    correctas = (re_corr * 4);
    incorrectas = (re_incor * (-1));
    re_bco = (re_bco * 0);

    total = (correctas + incorrectas + re_bco);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = total;
}