let inputNumber= document.getElementById('InputNumbers');

let PrintString = "";
let ArrayLetras=[];

fillArray();
EventListener();

function EventListener(){
    inputNumber.addEventListener('change', GetLetter);
}

function fillArray(){
    for(let i=0;i<=25;i++){
        ArrayLetras[i]=String.fromCharCode(i+65);
    }
}

function GetLetter(event){
    let value = Number(inputNumber.value);
    if(value>=0 && value<26){
        
        PrintString+=`<li class="list-group-item">${ArrayLetras[value]}</li>`;
        document.getElementById('AlertPrint').innerHTML=PrintString;
    }else{
        swal.fire({
            type:'error',
            title:'Limite de rango',
            text:'Favor de ingresar numeros entre 0 y 25'
        })
    }
    inputNumber.value="";
}