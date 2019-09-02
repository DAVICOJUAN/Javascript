//Esta linea crea una variable la cual se encarga de obtener por medio del objeto document el elemento button con el id "btnCalcular"
let btnCalcular = document.getElementById('btnCalcular');

//Por medio del método "addEventListiner" se le asigno el evento click al elemento button y al momento de ejecutar dicho evento  se ejecutara la función suma
btnCalcular.addEventListener('click', suma);


//Funcion: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna accion en el codigo
function suma() {

    //Se obtendran los valores de los inputs por medio del metodo "Value"
    let numero1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;

    //Se reasigna el valor de la variaable numero2 convirtiendolo de String a Numero.
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    //Se declara variable resultado y se inicializa con valor '0'.
    let resultado = 0;
    //Despues de obtener los datos de los elementos input se realliza el proceso de suma y se le asigna dicho valor a la variable "resultado"
    resultado = numero1 + numero2;

    //Se asigno a la variable "imprimirResultado" elemento (etiqueta) con el ID resultado
    let imprimirResultado = document.getElementById('resultado');

    //Por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir el elemento
    imprimirResultado.innerHTML = resultado;
}