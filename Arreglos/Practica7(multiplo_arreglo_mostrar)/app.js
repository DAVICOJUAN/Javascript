let btnRellenar=document.getElementById('btnRellenar');
EventListener();
function EventListener(){
    btnRellenar.addEventListener('click',llenarArreglo);
}
function llenarArreglo(){
    let multiplo = document.getElementById('multiplo').value;
    multiplo=Number(multiplo);
    let size = document.getElementById('rango_array').value;
    size=Number(size);
    let arreglo = [];
    let impresion="";
    for(let i=0;i<size;i++){
        arreglo[i]=multiplo*(i+1);
        impresion+=`<li class="list-group-item">${arreglo[i]}</li>`;
    }
    mostrarArreglo(impresion);
}
function mostrarArreglo(x){
    document.getElementById('lista').innerHTML=x;
}