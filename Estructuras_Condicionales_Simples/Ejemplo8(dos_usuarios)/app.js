let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let nombre1 = document.getElementById('nombre_1').value;
    let edad1 = document.getElementById('edad_1').value;
    let nombre2 = document.getElementById('nombre_2').value;
    let edad2 = document.getElementById('edad_2').value;
    let imprimir = document.getElementById('resultado');
    edad1 = Number(edad1);
    edad2 = Number(edad2);

    if (edad1 > edad2) {
        imprimir.innerText = `El mayor es ${nombre1}`;
    } else {
        imprimir.innerText = `El mayor es ${nombre2}`;
    }
}