let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let amount = document.getElementById('cantidad').value;
    let descuento = 0;
    amount = Number(amount);
    let imprimirResultado = document.getElementById('resultado');
    if (amount > 1000) {
        descuento = amount * 0.8;
        imprimirResultado.innerHTML = `El monto a pagar es: $ ${descuento}`;
    } else {
        imprimirResultado.innerHTML = `Esa cantidad no alcanza un descuento`;
    }
}