let btnMostrar = document.getElementById('mostrar_arreglo');
EventListener();
let contadorclicks=0;
function EventListener(){
    btnMostrar.addEventListener('click',mostrarArray);
}

function mostrarArray(){
    let size=document.getElementById('rango_array').value;
    size=Number(size);
    let nombres=[], longitudes=[];
    for(let i=0;i<size;i++){
       let li = document.createElement('li');
       li.setAttribute('class','list-group-item mb-2');
       let input = document.createElement('input');
       input.setAttribute('class','form-control');      
       input.setAttribute('id',`listArrayName${contadorclicks}`); 
       input.setAttribute('placeholder',`Ingrese el nombre #: ${i+1}`); 
       document.getElementById('ArrayListNames').appendChild(li);
       li.appendChild(input);
       contadorclicks=contadorclicks+1; 
    }
}