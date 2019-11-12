
let btnEnviar = document.getElementById('btnEnviar');
EventListener();
function EventListener(){
    btnEnviar.addEventListener('click',enviarDatos);
}
async function enviarDatos(){
    let velocidad = document.getElementById('vel_inicial').value;
    let grados = document.getElementById('grados_proyectil').value;
    velocidad=Number(velocidad);
    grados=Number(grados);
    if(grados>1 && grados<=90){
        let proyectil = new Proyectil(velocidad,grados);
        for(let tiempo=0; tiempo<=10; tiempo+= 0.01){
    
            let posicionX = proyectil.CalcularVelocidadX(tiempo);
            let posicionY = proyectil.CalcularVelocidadY(tiempo);
          
            if(posicionX>=0 && posicionY>=0 && posicionX <=100 && posicionY <=100){
                // proyectil.CrearSpan(posicionX,posicionY);
                await stop(proyectil, posicionX, posicionY);
            }
            
            // proyectil.CrearSpan(proyectil.CalcularVelocidadX(tiempo),
            // proyectil.CalcularVelocidadY(tiempo));
        }
    }
    else{
        document.getElementById('alerta').innerText="Grados necesarios entre 1° y 90°";
    }
}

 function stop(proyectil, posicionX, posicionY){
    return new Promise((res,rej)=>{
        setTimeout(() =>
        res (proyectil.CrearSpan(posicionX,posicionY),1000))
    })
}


