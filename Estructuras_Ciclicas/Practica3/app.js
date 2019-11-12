let btnAgregarFG = document.getElementById('btnAgregarFG');
let btnCalcular = document.getElementById('btnCalcularPromedio');
let numeroInput = 0;

EventListener();

function EventListener() {
    btnAgregarFG.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularEstatura)
}

function calcularEstatura() {
    let suma = 0;
    let promedio = 0;
    for (let x = 1; x <= numeroInput; x++) {
        let estatura = Number(document.getElementById(`PersonaEstatura${x}`).value);
        suma = suma + estatura;
    }
    promedio = suma / numeroInput;
    let Imprimir = document.getElementById('imprimir');
    Imprimir.innerText = promedio;
}

function AgregarFG() {

    numeroInput = numeroInput + 1;
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la estatura de la persona #: ${numeroInput}`);
    labelFG.appendChild(textLabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Ingresa estatura de persona');
    InputFC.setAttribute('id', `PersonaEstatura${numeroInput}`);

    let cajaPersona = document.getElementById('cajaPersona');
    cajaPersona.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);
}