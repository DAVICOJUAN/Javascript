let btnCalcular = document.getElementById('btnCalcular');
eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let precio_traje = document.getElementById('precio_traje').value;
    precio_traje = Number(precio_traje);
    let descuento = 0,
        pre_tota = 0;
    let imprimirResultado = document.getElementById('resultado');
    let precio_total = document.getElementById('precio_total');
    if (precio_traje > 3600) {
        descuento = precio_traje * 0.16;
        pre_tota = precio_traje - descuento;
        imprimirResultado.innerHTML = `<p>El descuento para el traje es: ${descuento} pesos</p>`;
        precio_total.innerHTML = `<p>El precio ya con descuento es de ${pre_tota} pesos</p>`;
    } else {
        descuento = precio_traje * 0.07;
        pre_tota = precio_traje - descuento;
        imprimirResultado.innerHTML = `<p>El descuento para el traje es: ${descuento} pesos`;
        precio_total.innerHTML = `<p>El precio ya con descuento es de ${pre_tota} pesos`;
    }
}