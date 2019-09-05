let btnComparar = document.getElementById('btnCompararNumeros');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

eventListener();

function eventListener() {
    //Se esta asignando el evento change al input que pertenece el id "numero1"
    numero1.addEventListener('blur', validarDatos);
    numero2.addEventListener('blur', validarDatos);
    btnComparar.addEventListener('click', compararValores);
}


//estamos recibiendo el parametro event debido a que el metodo "addEventListener" esta invocando la funcion validar Datos
function validarDatos() {

    //console.log(isNaN(numero1.value));
    console.log(event.target.value);
    //value = asdwq1234 sera true
    //Se utilizo la función isNaN para comprobar si el valor obtenido es un número, en caso de que no sea un número,
    //se utilizo el metodo focus para no permitirle al usuario cambiar de input
    // if (isNaN(numero1.value)) {
    //     numero1.focus();
    // }
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {

    let imprimir = document.getElementById('imprimirResultado');
    if (Number(numero1.value) == Number(numero2.value)) {
        imprimir.innerText = 'El numero A y B tienen el mismo valor';
        return;
    }

    if (Number(numero1.value) > Number(numero2.value)) {
        imprimir.innerText = 'El numero A es el valor mas grande';
    } else {
        imprimir.innerText = 'El numero B es el valor mas grande';
    }
}