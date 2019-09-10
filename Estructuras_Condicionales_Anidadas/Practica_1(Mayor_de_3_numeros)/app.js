let btnComparar = document.getElementById('btnComparar');

eventListener();

function eventListener() {
    btnComparar.addEventListener('click', CompararDatos);

}

function CompararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);

    let imprimirResultado = document.getElementById('resultado');

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            imprimirResultado.innerText = `
            <p> El numero ${numero1} es el número mayor</p>`
            imprimirResultado.innerHTML = `<p> El número ${numero1} es el número mayor</p>`
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info> El número ${numero1} es el número mayor</h4>`
        } else {
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info> El número ${numero3} es el número mayor</h4>`
        }
    } else {
        if (numero2 > numero3) {
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info> El número ${numero2} es el número mayor</h4>`
        } else {
            imprimirResultado.innerHTML = `<h4 class="alert-heading text-center text-info> El número ${numero3} es el número mayor</h4>`
        }
    }
}