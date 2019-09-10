let btnCalcular = document.getElementById('btnCalcular');

let numero1 = document.getElementById('calificacion_1');
let numero2 = document.getElementById('calificacion_2');
let numero3 = document.getElementById('calificacion_3');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {
    let imprimirResultado = document.getElementById('resultado');
    let imprimirPromedio = document.getElementById('promedio');
    let resultado = Number(numero1.value) + Number(numero2.value) + Number(numero3.value);

    // console.log(resultado);
    //resultado = resultado/3;
    //esta operacion es similar a escribir resultado = resultado / 3
    resultado /= 3;
    if (resultado >= 9) {
        //Aprobado
        imprimirResultado.innerHTML = `<p>El alumno esta Aprobado</p>`
    } else if (resultado < 9 && resultado >= 6) {
        //Regular
        imprimirResultado.innerHTML = `<p>El alumno es Regular</p>`
    } else {
        //Reprobado
        imprimirResultado.innerHTML = `<p>El alumno esta reprobado</p>`
    }
    imprimirPromedio.innerHTML = `<p>El alumno tiene un promedio de: ${resultado}</p>`
}