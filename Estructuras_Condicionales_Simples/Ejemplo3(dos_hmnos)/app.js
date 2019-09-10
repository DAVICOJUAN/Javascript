let btn_Diferencia = document.getElementById('btn_Diferencia');

eventListener();

function eventListener() {
    btn_Diferencia.addEventListener('click', diferencia_edad);
}

function diferencia_edad() {
    let edad1 = document.getElementById('edad_hmno1').value;
    let edad2 = document.getElementById('edad_hmno2').value;
    edad1 = Number(edad1);
    edad2 = Number(edad2);
    let dif_edad = 0;
    let imprimirResultado = document.getElementById('resultado_mayor');
    let resultado_dif = document.getElementById('resultado_dif');
    if (edad1 > edad2) {
        imprimirResultado.innerHTML = `<p>El hermano 1 es el mayor con: ${edad1} años</p>`;
        dif_edad = edad1 - edad2;
        resultado_dif.innerHTML = `<p>La diferencia de edad respecto con el menor son: ${dif_edad} años`;
    } else {
        imprimirResultado.innerHTML = `<p>El hermano 2 es el mayor con: ${edad2} años</p>`;
        dif_edad = edad2 - edad1;
        resultado_dif.innerHTML = `<p>La diferencia de edad respecto con el menor son: ${dif_edad} años`;
    }
}