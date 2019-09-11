let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularMonto)
}

function CalcularMonto() {
    let dias = document.getElementById('estancia').value;
    let costo_dia = document.getElementById('costo_noche').value;
    let comidas = document.getElementById('costo_comida').value;
    dias = Number(dias);
    costo_dia = Number(costo_dia);
    comidas = Number(comidas);
    let otros_gastos = 0,
        precio_dia = 0,
        total = 0;
    precio_comida = 0;
    precio_dia = (dias * costo_dia);
    precio_comida = (dias * comidas);
    otros_gastos = (dias * 100);
    total = (precio_dia + precio_comida + otros_gastos);
    let imprimirResultado = document.getElementById('imprimir');
    imprimirResultado.innerHTML = `<p>Monto del cheque $: ${total}
                                 Desglose de gastos:
                                   Estancia en Hotel $: ${precio_dia} 
                                   Comidas $: ${precio_comida}
                                   Otros gastos $: ${otros_gastos}</p>`;

}