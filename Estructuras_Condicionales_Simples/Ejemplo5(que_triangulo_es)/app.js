let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', definirtriangulo);
}

function definirtriangulo() {
    let lado1 = document.getElementById('lado_1').value;
    let lado2 = document.getElementById('lado_2').value;
    let lado3 = document.getElementById('lado_3').value;
    let imprimir = document.getElementById('resultado');
    lado1 = Number(lado1);
    lado2 = Number(lado2);
    lado3 = Number(lado3);
    if (lado1 == lado2 && lado1 == lado3) {
        imprimir.innerHTML = `Es un triángulo equilatero`;
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        imprimir.innerHTML = 'Es un triángulo isosceles';
    } else {
        imprimir.innerHTML = 'Es un triángulo escaleno';
    }
}