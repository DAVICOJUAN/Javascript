let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularTarifa);
}

function calcularTarifa() {
    let imprimir = document.getElementById('resultado');
    let horas_uso = document.getElementById('horas_uso').value;
    horas_uso = Number(horas_uso);

    let dif_hrs = 0,
        cobro = 0,
        acum = 0;
    if (horas_uso > 10) {
        dif_hrs = horas_uso - 10;
        cobro = dif_hrs * 2;
        acum = cobro + 37;
        imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
    } else if (horas_uso <= 10 && horas_uso >= 6) {
        if (horas_uso == 10) {
            acum = 15 + 22;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else if (horas_uso == 9) {
            acum = 12 + 22;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else if (horas_uso == 8) {
            acum = 9 + 22;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else if (horas_uso == 7) {
            acum = 6 + 22;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else {
            //horas_uso==6    
            acum = 3 + 22;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        }
    } else if (horas_uso <= 5 && horas_uso >= 3) {
        if (horas_uso == 5) {
            acum = 12 + 10;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else if (horas_uso == 4) {
            acum = 8 + 10;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`
        } else {
            //horas_uso==3
            acum = 4 + 10;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        }
    } else if (horas_uso <= 2 && horas_uso >= 1) {
        if (horas_uso == 2) {
            acum = 5 + 5;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        } else {
            //horas_uso==1
            acum = 5;
            imprimir.innerText = `El cobro a realizar es de: $${acum} pesos`;
        }
    } else {
        imprimir.innerText = `No puedo cobrar esa tarifa en horas`;
    }

}