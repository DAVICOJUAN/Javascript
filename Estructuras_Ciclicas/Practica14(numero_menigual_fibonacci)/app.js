let btnCalcular=document.getElementById('btnCalcular');
EventListener();
function EventListener(){
    btnCalcular.addEventListener('click',GenerarSerie)
}
function GenerarSerie(){
    let limite = document.getElementById('numero').value;
    limite=Number(limite);
    let impresion="";
    let a=0,c=0,b=1;
    impresion+=`<li class="list-group-item">${c}</li>`;
    while(c<limite){
        
        c=a+b;
        a=b;
        b=c;
        impresion+=`<li class="list-group-item">${c}</li>`;
    }
    document.getElementById('listaNumero').innerHTML=impresion;

}