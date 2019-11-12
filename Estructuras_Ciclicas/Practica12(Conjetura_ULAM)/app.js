let btnCalcular = document.getElementById('btnCalcular');
EventListener();
function EventListener(){
    btnCalcular.addEventListener('click',calcularULAM);
}

function calcularULAM(){
    let inicio = document.getElementById('numero_positivo').value;
    inicio=Number(inicio);
    let datosimprimir="";
    if(inicio>0){
        datosimprimir=`<li class="list-group-item">${inicio}</li>`;
        while(inicio!=1){
            if(inicio%2==0)
            {
               inicio=inicio/2; 
            }
            else{
                inicio=inicio*3+1;
            }
            datosimprimir+=`<li class="list-group-item">${inicio}</li>`;
        }
        document.getElementById('ListaNumerica').innerHTML=datosimprimir;
    }
    else{
      let resultado = document.getElementById('resultado');  
      resultado.innerText=`El número debe ser positivo.`;
    }
    
}