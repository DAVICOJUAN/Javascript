let inputNumber = document.getElementById('Numero');

let imprimir = document.getElementById('resultado');

EventListener();

function EventListener() {
    inputNumber.addEventListener('keypress', calcularCifras);
    inputNumber.addEventListener('blur', calcularCifrasBlur);
}

function calcularCifrasBlur() {
    if (Number(inputNumber.value) <= 9) {
        imprimir.innerHTML = `<h4>EL número tiene un digito</h4>`
        return; //detiene una función y sale de ella.
    }
    if (Number(inputNumber.value) <= 99) {
        imprimir.innerHTML = `<h4>El número tiene dos digitos</h4>`
        return;
    }
    if (Number(inputNumber.value) <= 999) {
        imprimir.innerHTML = `<h4>El número tiene tres digitos</h4>`
        return;
    }
    if (Number(inputNumber.value) < 10000) {
        imprimir.innerHTML = `<h4>Error, ingrese número valido (1,2 o 3 digitos)</h4>`
        return;
    }
}

function calcularCifras(event) {

    let imprimirResultado = document.getElementById('resultado');
    //cuando se acciona el evento keypress añadimos la impresion de una equis

    console.log(event);
    //para saber cual tecla presiono


    if (event.key == 'Enter') {

        if (Number(inputNumber.value) > 999) {
            //error
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-danger">Cifra mayor de 3 digitos, ingrese una cifra de 3 digitos</h4>`
        }

        if (Number(inputNumber.value) <= 999) {
            //3cifras
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info">Cifra con tres digitos</h4>`
        }
        if (Number(inputNumber.value) <= 99) {
            //2cifras
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info">Cifra con dos digitos</h4>`
        }
        if (Number(inputNumber.value) <= 9) {
            //1cifra
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info"Cifra de un digito</h4>`
        }
    }
}