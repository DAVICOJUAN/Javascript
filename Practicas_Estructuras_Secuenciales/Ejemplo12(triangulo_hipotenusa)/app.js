let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularHip);
}

function CalcularHip() {
    let cat_opuesto = document.getElementById('cat_opuesto').value;
    let cat_adyacente = document.getElementById('cat_adyacente').value;
    cat_opuesto = Number(cat_opuesto);
    cat_adyacente = Number(cat_adyacente);

    let hip = 0,
        cat_op2 = 0,
        cat_ady2 = 0;

    cat_op2 = Math.pow(cat_opuesto, 2);
    cat_ady2 = Math.pow(cat_adyacente, 2);
    hip = Math.sqrt(cat_op2 + cat_ady2);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `<p>El valor de la hipotenusa del triángulo rectángulo es: ${hip}</p>`;
}