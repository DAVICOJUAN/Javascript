let btnGenerar = document.getElementById('btnGenerar');
let btnMultiplicar = document.getElementById('btnMultiplicar');
EventListener();
let arrayA=[];
let arrayB=[];
function EventListener(){
    btnGenerar.addEventListener('click',llenarAleatorios);
    btnMultiplicar.addEventListener('click',multiplicarporpuntocinco);
}
function llenarAleatorios(){
    let impresionaleatorios="";
    for(let i=0;i<10;i++){
        arrayA[i]=Math.round(Math.random()*(50-0)+0);
        impresionaleatorios+=`<li class="list-group-item">${arrayA[i]}</li>`;
    }
    console.log(arrayA);
    document.getElementById('listArrayAleatorios').innerHTML=impresionaleatorios;
}

function multiplicarporpuntocinco(){
    let impresionaleatorios="";
    for(let i=0;i<10;i++){
        arrayB[i]=arrayA[i]*0.5;
        impresionaleatorios+=`<li class="list-group-item">${arrayB[i]}</li>`;
    }
    document.getElementById('listArrayMitad').innerHTML=impresionaleatorios;
}