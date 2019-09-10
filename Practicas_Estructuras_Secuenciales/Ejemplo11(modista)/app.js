let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', Calcular);
}

function Calcular() {
    let metros = document.getElementById('mts_tela').value;
    metros = Number(metros);
    let transfor = 0,
        pul = 0;

    transfor = metros * 100;
    pul = (transfor / 2.54);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `<p>Son necesarias: ${pul} pugadas de tela </p>`;
}