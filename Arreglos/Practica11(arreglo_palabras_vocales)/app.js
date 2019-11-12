let btnsize = document.getElementById('GenerarArray');
let btnVocales=document.getElementById('btnGenerarVocales');
let btnasignar=document.getElementById('asignar_inputs');
let arregloA=[];
let arreglovocales=[];
EventListener();
let contador=0;
let size = document.getElementById('rango_array');
let arr=0;
function EventListener(){
    btnsize.addEventListener('click',generarArreglo);
    btnVocales.addEventListener('click',generarArregloVocales);
    btnasignar.addEventListener('click',asignar);
}
function generarArreglo(){
    
    arr = Number(size.value);
    console.log(arr);
  
   for(let i=0;i<arr;i++){
       let li = document.createElement('li');
       li.setAttribute('class', 'list-group-item mb-2');
       let input = document.createElement('input');
       input.setAttribute('class','form-control');
       input.setAttribute('id',`listArrayNames${contador}`);
       input.setAttribute('placeholder',`Ingrese una palabra: `);
       document.getElementById('ArrayListNames').appendChild(li);
       li.appendChild(input);
       contador++;
   }
   generarArregloVocales();
}
function asignar(){
    let val='';
    for(let x=0; x<arr; x++){

       val = document.getElementById(`listArrayNames${x}`);
        
        arregloA[x] = val.value;
    }
    
}
function generarArregloVocales(){
    
    let impresion="";
    for(let i=0;i<arregloA.length;i++){
        let caracter=(arregloA[i]).toLowerCase();
        
        if(caracter[0]=='a'||caracter[0]=='e'||caracter[0]=='i'||caracter[0]=='o'||caracter[0]=='u'){
            arreglovocales[i]=caracter;
            impresion+=`<li class="list-group-item">${arreglovocales[i]}</li>`; 
        }
    }
    document.getElementById('ArrayListVowels').innerHTML=impresion;
}