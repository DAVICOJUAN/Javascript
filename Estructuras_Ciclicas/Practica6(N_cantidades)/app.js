let btnagregarnum = document.getElementById('btnAgregarNumero');
let btnclasificar = document.getElementById('btnClasificarNumeros');
let numeros = 0;
EventListener();

function EventListener() {
    btnagregarnum.addEventListener('click', agregarnum);
    btnclasificar.addEventListener('click', clasificar);
}

function agregarnum() {
    numeros = numeros + 1;
    //creacion e insercion de tags html
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');
    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');
    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');
    let labelFG = document.createElement('label');
    let textlabel = document.createTextNode(`Ingresa el ${numeros}° número:`);
    labelFG.appendChild(textlabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Ingresa cualquier número');
    InputFC.setAttribute('id', `cifra${numeros}`);

    let cajaNumeros = document.getElementById('cajaNumeros');

    cajaNumeros.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);
}

function clasificar() {
    let acum_menor = 0,
        acum_mayor = 0;
    for (let x = 1; x <= numeros; x++) {
        let cantidad = document.getElementById(`cifra${x}`).value;
        cantidad = Number(cantidad);
        if (cantidad <= 0) {
            acum_menor = acum_menor + 1;
        } else {
            acum_mayor = acum_mayor + 1;
        }
    }
    let imprimir = document.getElementById('resultadomenor');
    let resultado = document.getElementById('resultadomayor');
    imprimir.innerHTML = `Números menores o iguales a cero: ${acum_menor} números`;
    resultado.innerHTML = `Números mayores a cero: ${acum_mayor} números`;
}