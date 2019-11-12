let btnAceptar = document.getElementById('btnAceptar');
let btnExit = document.getElementById('btnSalir');
let btnAFavor = document.getElementById('btnAFavor');
let btnContra = document.getElementById('btnContra');
let btnAbste = document.getElementById('btnAbste');
let btnFinalizar = document.getElementById('btnFinalizar');

let voto = new Voto();

EventListener();
function EventListener(){
    btnAceptar.addEventListener('click',enviarDatos);
    btnExit.addEventListener('click',borrarDatos);
    btnAFavor.addEventListener('click',afavor);
    btnContra.addEventListener('click',encontra);
    btnAbste.addEventListener('click',abstencion);
    btnFinalizar.addEventListener('click',finalizar);
}
function enviarDatos(){
    let texto = document.getElementById('texto').value;
    let prueba = document.getElementById('texto2');
    prueba.innerText=texto;
}
function borrarDatos(){
    let texto = document.getElementById('texto');
    texto.value = '';
}
function afavor(){
    voto.VotoaFavor();
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Voto: A favor, registrado',
        showConfirmButton: false,
        timer: 1500
      })
}
function encontra(){
    voto.VotoenContra();
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Voto: En Contra, registrado',
        showConfirmButton: false,
        timer: 1500
      })
}
function abstencion(){
    voto.VotoAbstencion();
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Voto: En Abstención, registrado',
        showConfirmButton: false,
        timer: 1500
      })
}
function finalizar(){
    if(voto.afavor>voto.encontra&&voto.abstencion){
        Swal.fire({
            title: `La moción se acepta, con: ${voto.afavor} votos a favor, ${voto.encontra} votos en contra, y ${voto.abstencion} votos en abstención`,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          })
    }
    else if(voto.encontra>voto.afavor&&voto.abstencion){
        Swal.fire({
            title: `La moción se rechaza con: ${voto.afavor} votos a favor, ${voto.encontra} votos en contra y ${voto.abstencion} abstenciones`,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          })

    }
}