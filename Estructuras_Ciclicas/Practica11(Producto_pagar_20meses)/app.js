let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularGastos);
}

function calcularGastos() {
    for (let i = 1; i < 21; i++) {
        let DivRow = document.createElement('div');
        DivRow.setAttribute('class', 'row');
        let DivCol = document.createElement('div');
        DivCol.setAttribute('class','col-12');
        let DivFormGroup = document.createElement('div');
        DivFormGroup.setAttribute('class','form-group');
        let labelFG = document.cretateElement('label');
        let textlabel = document.createTextNode('');
    }
}