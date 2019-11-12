let btnAddElements=document.getElementById('AgregarElemento');
EventListener();
function EventListener(){
    btnAddElements.addEventListener('click',fillArray);
}
/* ================================
   Inicia parte de aplicacion resuelta por medio de fuerza bruta
==================================*/
function fillArray(){
    let inputValue=document.getElementById('AgregarElementos');
    let arrayPrimeNumbers = [];


    console.time('InicioForFuerzaBruta');
    for(let x=0;x<Number(inputValue.value);x++){
        let numberPrimeRandom = isPrime();
        if(numberPrimeRandom === null){
            x--;
        } else {
            arrayPrimeNumbers[x] = numberPrimeRandom;
        }
    }
    console.timeEnd('InicioForFuerzaBruta');
    console.log(arrayPrimeNumbers);
    let maximo=0;
    for(let x=0;x<=arrayPrimeNumbers.length;x++){
        if(maximo<arrayPrimeNumbers[x]){
            maximo=arrayPrimeNumbers[x]
        }
    }
}

function isPrime(){
    let NumberRandom= Math.floor(Math.random()*1000)+1;
    console.log();
    for(let i =2;i<NumberRandom;i++){

        if(NumberRandom%i==0){
            return;
        }
    }
    return NumberRandom; 
}
/* ================================
   Termina aplicacion Fuerza Bruta
==================================*/


/* ================================
   Inicia Aplicacion resuelta por paradigma dinamico
==================================*/

// let ArrayNumberPrimeDinamyc=[];
// function fillArrayDinamyc(){
//     let PrimeNumber=0;
    
//     for(let i=0;i<=PrimeNumber && i<10;i++){
//         PrimeNumber++;
//         if(PrimeNumber%i==0){
//             arrayPrimeNumber.push(PrimeNumber);
//         }
//     }
//}