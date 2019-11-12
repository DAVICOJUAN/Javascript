let btnGenerar = document.getElementById('btnGenerar');
let btnOrdenar = document.getElementById('btnOrdenar');
let arrayP=[];
EventListener();

function EventListener(){
    btnGenerar.addEventListener('click',numerosPrimos);
    btnOrdenar.addEventListener('click',numerosOrdenados);
}
function numerosPrimos(){
    let impresion="";
    let ind=0;
    for(let i=2;i<=1000;i++){
        let cont=0;
        for(let y=2;y<=i;y++){
            if(i%y==0){
                cont=cont+1;
            }
        }
        if(cont==1){
            arrayP[ind]=i;
            impresion+=`<li class="list-group-item">${arrayP[ind]}</li>`;
            ind=ind+1;
        }
    }
    document.getElementById('listArrayNumbers').innerHTML=impresion;
}
function numerosOrdenados(){
    let impresion="";
    for(let i=1;i<arrayP.length;i++){
        for(let j=0;j<(arrayP.length-i);j++){
            let temporal=0;
            if(arrayP[j]<arrayP[j+1]){
                temporal=arrayP[j+1];
                arrayP[j+1]=arrayP[j];
                arrayP[j]=temporal;
            }
        }
    }
    for(let i=0;i<arrayP.length;i++){
        impresion+=`<li class="list-group-item">${arrayP[i]}</li>`;
    }
    document.getElementById('listArraySort').innerHTML=impresion;
}