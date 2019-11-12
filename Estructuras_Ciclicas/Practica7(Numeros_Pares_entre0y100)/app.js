let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', generareimprimir)
}

function generareimprimir() {
    let y = 0;

    for (let x = 0; x <= 100; x++) {

        if (x % 2 == 0) {
            y += 1;

            let newli = document.createElement('li');
            newli.setAttribute("id", `listaN${y}`);
            newli.setAttribute("class", "list-group");
            let newContent = document.createTextNode(x);
            newli.appendChild(newContent);
            let listaDesordenada = document.getElementById('listaPares');
            listaDesordenada.appendChild(newli);
        }
    }
}