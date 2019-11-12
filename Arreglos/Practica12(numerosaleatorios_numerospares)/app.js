let btnCrear = document.getElementById('btnColeccion');
let btnClasiPares = document.getElementById('btnPares');
arregloA=[];
arregloP=[];
EventListener();
function EventListener(){
    btnCrear.addEventListener('click',crearColeccion);
    btnClasiPares.addEventListener('click', numPares);
}

function crearColeccion(){
    let size= document.getElementById('size_array').value;
    size=Number(size);
    let impresion ="";
    for(let i=0;i<size;i++){
        arregloA[i]=Math.round(Math.random()*(100-0)+0);
        impresion+=`<li class="list-group-item">${arregloA[i]}</li>`;
    }
    document.getElementById('listArrayNumerosAleatorios').innerHTML=impresion;

}
function numPares(){
    let impresion="";
    console.log(arregloA.length);
    for(let i=0;i<arregloA.length;i++){
        if(arregloA[i]%2==0){
            arregloP[i]=arregloA[i];
            impresion+=`<li class="list-group-item">${arregloP[i]}</li>`;
        }
    document.getElementById('listArrayNumerosPares').innerHTML=impresion;    
    }
}