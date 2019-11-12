let btnAgregarventa = document.getElementById('btnAgregarVenta');
let btnClasificarVenta = document.getElementById('btnClasificarVenta');
let venta = 0;
EventListener();

function EventListener() {
    btnAgregarventa.addEventListener('click', agregarVenta);
    btnClasificarVenta.addEventListener('click', clasificarVenta);
}

function agregarVenta() {
    venta = venta + 1;
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');
    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');
    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');
    let labelFG = document.createElement('label');
    let textlabel = document.createTextNode(`Ingresa la venta # ${venta}`);
    labelFG.appendChild(textlabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Cantidad vendida en dinero');
    InputFC.setAttribute('id', `venta${venta}`);

    let cajaVentas = document.getElementById('cajaVentas');
    cajaVentas.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);
}

function clasificarVenta() {
    let mayormil = 0,
        entrequinymil = 0,
        menorigualquin = 0,
        sum1 = 0,
        sum2 = 0,
        sum3 = 0;
    for (i = 1; i <= venta; i++) {
        let venta = document.getElementById(`venta${i}`).value;
        venta = Number(venta);
        if (venta > 1000) {
            mayormil = mayormil + 1;
            sum1 = sum1 + venta;
        } else if (venta <= 1000 && venta > 500) {
            entrequinymil = entrequinymil + 1;
            sum2 = sum2 + venta;
        } else if (venta <= 500) {
            menorigualquin = menorigualquin + 1;
            sum3 = sum3 + venta;
        }
    }
    let r1 = document.getElementById('res1');
    r1.innerHTML = `${mayormil} Monto vendido: ${sum1} pesos`;
    let r2 = document.getElementById('res2');
    r2.innerHTML = `${entrequinymil} Monto vendido: ${sum2} pesos`;
    let r3 = document.getElementById('res3');
    r3.innerHTML = `${menorigualquin} Monto vendido: ${sum3} pesos`;
}