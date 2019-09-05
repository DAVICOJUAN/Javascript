let btnverificarstatus = document.getElementById('btn_verificarstatus');

eventListener();

function eventListener() {
    btnverificarstatus.addEventListener('click', verificarEstatus);
}

function verificarEstatus() {
    let calificacion = Number(document.getElementById('Calificacion').value);
    let imprimirResultado = document.getElementById('imprimirCalificacion');



    if (calificacion > 8) {

        imprimirResultado.innerHTML = 'Aprobado';
    } else {
        let audio = document.getElementById('AudioDonRamon');
        audio.play();
        imprimirResultado.innerHTML = 'Reprobado';
    }
}