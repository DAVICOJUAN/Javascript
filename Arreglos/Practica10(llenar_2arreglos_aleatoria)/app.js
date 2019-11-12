let btnSize = document.getElementById('btnArraySize');
let input=document.getElementById('opcion');
let arregloA=[];
let arregloB=[];
let arregloC=[];
EventListener();
function EventListener(){
    btnSize.addEventListener('click',generarArray);
    input.addEventListener('change', Realizar);
}
function generarArray(){
    let size = document.getElementById('rango_array').value;
    size = Number(size);
    let inferior=-100;
    for(let i=0;i<size;i++){
        arregloA[i]=Math.round(Math.random() * (100 - inferior) + inferior);
        arregloB[i]=Math.round(Math.random() * (100 - inferior) + inferior);
    }
    console.log(arregloA);
    console.log(arregloB);
    document.getElementById('mensaje').innerText='Fueron llenados 2 arreglos';
}
function Realizar(event){
    let value = Number(input.value);
    if(value>=1 && value<4){
        if(value==1){
            MostrarArrays();
            SumaArrays();
        }
        else if(value==2){
            MostrarArrays();
            RestaArrays();
        }
        else{
            MostrarArrays();
            MultiArrays();
        }
    
    }
    else{}
}
function SumaArrays(){
    MostrarArrays();
    let impresion="";
    for(let i=0;i<arregloA.length;i++){
        arregloC[i]= arregloA[i]+arregloB[i];
        impresion+=`<li class="list-group-item">${arregloC[i]}</li>`;
    }
    document.getElementById('tres').innerHTML=impresion;
}
function RestaArrays(){
    MostrarArrays();
    let impresion="";
    for(let i=0;i<arregloA.length;i++){
        arregloC[i]=arregloB[i]-arregloA[i];
        impresion+=`<li class="list-group-item">${arregloC[i]}</li>`;
    }
    document.getElementById('tres').innerHTML=impresion;
}
function MultiArrays(){
    MostrarArrays();
    let impresion="";
    for(let i=0;i<arregloA.length;i++){
        arregloC[i]=arregloB[i]*arregloA[i];
        impresion+=`<li class="list-group-item">${arregloC[i]}</li>`
    }
    document.getElementById('tres').innerHTML=impresion;
}
function MostrarArrays(){
    let impresionlista1="";
    let impresionlista2="";
    for(let i=0;i<arregloA.length;i++){
        impresionlista1+=`<li class="list-group-item">${arregloA[i]}</li>`;
        impresionlista2+=`<li class="list-group-item">${arregloB[i]}</li>`;
    }
    document.getElementById('uno').innerHTML=impresionlista1;
    document.getElementById('dos').innerHTML=impresionlista2;
}