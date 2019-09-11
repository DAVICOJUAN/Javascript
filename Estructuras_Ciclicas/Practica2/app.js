let btnAgregarFG = document.getElementById('btnAgregarFG');
let btnCalcular = document.getElementById('btnCalcularPromedio');
let numeroInput = 0;
EventListener();

function EventListener() {
    btnAgregarFG.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularPromedio);
}

function calcularPromedio() {
    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`EdadAlumno${x}`).value);
        suma += edad;
    }

    promedio = suma / numeroInput;
    let Imprimir = document.getElementById('imprimir');
    Imprimir.innerText = promedio;
}

function AgregarFG() {
    numeroInput++;
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno${numeroInput}`);
    labelFG.appendChild(textLabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Ingresa la edad del alumno');
    InputFC.setAttribute('id', `EdadAlumno${numeroInput}`);

    let cajaAlumnos = document.getElementById('cajaAlumnos');
    // CajaAlumnos.appendChild(DivRow);
    cajaAlumnos.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);
}