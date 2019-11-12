let btnCalcular = document.getElementById('btnCalcular');
EventListener();
function EventListener(){
    btnCalcular.addEventListener('click',CalcularIndice);
}
function CalcularIndice(){
    let indice = document.getElementById('indice').value;
    indice = Number(indice);
    if(indice>0){
        let a=0, b=1, c=0, cont=0, impresion="";
        impresion+=`<li class="list-group-item">${a}</li>`;
        do{
            c=a+b;
            a=b;
            b=c;
            impresion+=`<li class="list-group-item">${c}</li>`
            cont+=1;
        }
        while(cont<=indice-1);
        document.getElementById('listaIndice').innerHTML=impresion;
    }else{
        let resultado = document.getElementById('resultado');
        resultado.innerText='Ingresa un número positivo';
    }
}