let btnAgregarAhorro = document.getElementById('btnAgregarAhorro');
let contador = 0;

EventListener();

function EventListener() {
    btnAgregarAhorro.addEventListener('click', AgregarAhorro);
}

function AgregarAhorro() {
    if (contador < 12) {
        //Cada vez que se de un click a la variable contador se le sumara un uno.
        contador = contador + 1;
        let ahorro = Number(document.getElementById('ahorroMensual').value);
        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `AhorroMensual${contador}`)
        let textoSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.appendChild(textoSpan);
        let ImprimirSpan = document.getElementById(`mes${contador}`);

        ImprimirSpan.appendChild(spanAhorro);
        CalcularAhorro();
    }
}

function CalcularAhorro() {
    // let imprimirAhorroTotal = document.getElementById('total');
    let suma = 0;
    for (let i = 1; i <= contador; i++) {
        let valorObtenido = document.getElementById(`AhorroMensual${i}`).textContent;
        suma = suma + Number(valorObtenido);
    }

    let imprimirAhorroTotal = document.getElementById('total');
    imprimirAhorroTotal.innerHTML = `<span> Total $${suma}</span>`;
    // let spanTotal = document.createElement('span');
    // let TextoTotal = document.createTextNode(suma);
    // spanTotal.appendChild(TextoTotal);
    // imprimirAhorroTotal.appendChild(spanTotal);

}