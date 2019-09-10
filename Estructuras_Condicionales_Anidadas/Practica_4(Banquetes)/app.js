let btnCalcular = document.getElementById('btnCalcular');

let numerodepersonas = document.getElementById('numero_personas');

//declara la llamada de eventListener
EventListener();
//declar funcion eventListener
function EventListener() {
    btnCalcular.addEventListener('click', CalcularPresupuesto);
}

function CalcularPresupuesto() {
    let imprimirResultado = document.getElementById('resultado');
    let costo = 0;
    let personas = Number(numerodepersonas.value);
    if (personas > 300) {
        costo = (personas * 75);
        imprimirResultado.innerHTML = `<p>Presupuesto de $: ${costo} para: ${personas} personas</p>`
    } else {
        if (personas <= 300 && personas > 200) {
            costo = (personas * 85);
            imprimirResultado.innerHTML = `<p>Presupuesto de $: ${costo} para: ${personas} personas</p>`
        } else {
            costo = (personas * 95);
            imprimirResultado.innerHTML = `<p>Presupuesto de $: ${costo} para: ${personas} personas</p>`
        }
    }
}