let btnGenerardias = document.getElementById('btnGenerarDias');
let btngenerarsueldo = document.getElementById('btnSueldo');
EventListener();

function EventListener() {
    btnGenerardias.addEventListener('click', generarDias);
    btngenerarsueldo.addEventListener('click', calcularSueldo);
}

function generarDias() {
    for (let i = 1; i < 7; i++) {
        let DivRow = document.createElement('div');
        DivRow.setAttribute('class', 'row');
        let DivCol = document.createElement('div');
        DivCol.setAttribute('class', 'col-12');
        let DivFormGroup = document.createElement('div');
        DivFormGroup.setAttribute('class', 'form-group');
        let labelFG = document.createElement('label');
        let textlabel = document.createTextNode(`¿Horas trabajadas del día: ${i}?`);
        labelFG.appendChild(textlabel);

        let InputFC = document.createElement('input');
        InputFC.setAttribute('type', 'number');
        InputFC.setAttribute('class', 'form-control');
        InputFC.setAttribute('placeholder', 'Número de horas trabajadas por día');
        InputFC.setAttribute('id', `hrs_dia${i}`);

        let cajaHoras = document.getElementById('cajaHoras');

        cajaHoras.appendChild(DivRow);
        DivRow.appendChild(DivCol);
        DivCol.appendChild(DivFormGroup);
        DivFormGroup.appendChild(labelFG);
        DivFormGroup.appendChild(InputFC);

    }
}

function calcularSueldo() {
    let total_horas = 0,
        sueldo = 0;
    for (let x = 1; x < 7; x++) {
        let horas = document.getElementById(`hrs_dia${x}`).value;
        horas = Number(horas);
        console.log(horas);

        total_horas = total_horas + horas;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `En 6 días, trabajaste: ${total_horas} horas`;
    sueldo = total_horas * 11.4088;
    let sueldotot = document.getElementById('sueldo_total');
    sueldotot.innerHTML = `Sueldo a recibir es: ${sueldo}, por ${total_horas} horas laboradas`;
}