let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularKm);
}

function calcularKm() {
    let v = 70;
    for (let i = 150; i > v; i--) {
        v = v + 1;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Los vehículos se encontraran en el km: ${v}`;
}