let btnAgregarElementos = document.getElementById('AgregarElementos');
EventListener();

function EventListener(){
    btnAgregarElementos.addEventListener('click',fillArray);
}
function fillArray(){
    let inputAddElements=document.getElementById('AgregarElemento');
    let dataArray = [];
    for(let i=0;i<Number(inputAddElements.value);i++){
        dataArray[i]= Math.floor(Math.random()*10);
    }
    showArray(dataArray);
}

function showArray(dataArray){
    // let inputAddElements=document.getElementById('AgregarElemento');
    // let dataArray =[];
    let suma=0, DatosImprimir="";

    console.log(dataArray);
    for(let i=0;i<dataArray.length;i++){
        suma+= dataArray[i];
        DatosImprimir += `<li class="list-group-item">${dataArray[i]}</li>`;
        // let newli = document.createElement('li');
        // newli.setAttribute("id",`listaN${i+1}`);
        // newli.setAttribute("class","list-group");
        
    }
    document.getElementById('listaNumerica').innerHTML=DatosImprimir;
    let imprimir=document.getElementById('sumadatos');
    sumadatos.innerText=suma;

    // let newContent=document.createTextNode(dataArray[i]);
    // newli.appendChild(newContent);
    // let listaDesordenada=document.getElementById('listaNumerica');
    // listaDesordenada.appendChild(newli);
}
