let btnSize = document.getElementById('btnRango');
let btnInvert = document.getElementById('btnInvertArray');
let btnAsign = document.getElementById('btnAsignar');
let listaArray ='';
EventListener();
let ind=0;
let arregloPalabras=[];
let arregloInversion=[];
function EventListener(){
    btnSize.addEventListener('click',generarInput);
    btnInvert.addEventListener('click',invertirArreglo);
    btnAsign.addEventListener('click',asignarPalabras);
}

function generarInput(){
    let size = document.getElementById('rango_arreglo').value;
    size = Number(size);
    for(let i =0;i<size;i++){
       let li = document.createElement('li');
       li.setAttribute('class','list-group-item mb-2');
       let input = document.createElement('input');
       input.setAttribute('class','form-control'); 
       input.setAttribute('id',`listArrayNames${ind}`); 
       input.setAttribute('placeholder','Ingrese una palabra: ');
       document.getElementById('ArrayListWords').appendChild(li);
       li.appendChild(input);
       ind=ind+1; 
    }
}
function asignarPalabras(){
    let size = document.getElementById('rango_arreglo').value;
    size=Number(size);
    let asignar="";
    for(let i=0;i<size;i++){
        asignar = document.getElementById(`listArrayNames${i}`);
        arregloPalabras[i] = asignar.value;
       listaArray += `<li class="list-group-item">${arregloPalabras[i]}</li>`; 
    }
    document.getElementById('ArrayListWords').innerHTML=listaArray;
    
}
function invertirArreglo(){
    console.log(arregloPalabras.length);
    let y=0;
    let pal="";
    for(let i=arregloPalabras.length-1;i>=0;i--){
        arregloInversion[y]=arregloPalabras[i];
        pal+=`<li class="list-group-item">${arregloInversion[y]}</li>`;
        y++;
    }
    document.getElementById('ArrayListInverted').innerHTML=pal;
}