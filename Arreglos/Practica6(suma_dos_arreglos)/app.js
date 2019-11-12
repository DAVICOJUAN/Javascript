let btnAgregar = document.getElementById('btnAddElements');
let btnCalculateArray = document.getElementById('btnCalculateArray');
let CounterClicksAddElement =0;
EventListener();
function EventListener(){
    btnAgregar.addEventListener('click', AddElements);
    btnCalculateArray.addEventListener('click',calculateArray);
}

function AddElements(){
    let li=document.createElement('li');
    li.setAttribute('class','list-group-item mb-2');
    let input = document.createElement('input');
    input.setAttribute('class','form-control');
    input.setAttribute('id',`listArrayR${CounterClicksAddElement}`);
    input.setAttribute('placeholder','Ingrese un digito');

    let li2=document.createElement('li');
    li2.setAttribute('class','list-group-item mb-2');
    let input2 = document.createElement('input');
    input2.setAttribute('class','form-control');
    input2.setAttribute('id',`listArrayL${CounterClicksAddElement}`);
    input2.setAttribute('placeholder','Ingrese un digito');

    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);

    // input.removeAttribute('id');
    // input.setAttribute('id',`listArrayL${CounterClicksAddElement}`);

    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);

    CounterClicksAddElement++;
}

function calculateArray(){
    let array1=[];
    let array2=[];
    let array3=[];
    for(let i =0;i<CounterClicksAddElement;i++){


        array1[i]=Number(document.getElementById(`listArrayR${i}`).value);
        array2[i]=Number(document.getElementById(`listArrayL${i}`).value);

        if(isNaN(array1[i])||isNaN(array2[i])){
             
            Swal.fire({
            type: 'error',
            title: 'CARACTER INVALIDO....',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
            })

            array1 =[];
            array2 =[];
            document.getElementById(`listArrayR${i}`).focus();

            return;
        }
    }

    for (let x=0;x<array1.length;x++){
        array3[x] = array1[x] + array2[x];
    }
    let ConcatenarResultado="";
    for(let y=0;y<array1.length;y++){
        ConcatenarResultado+=`<li class="list-group-item">${array3[y]}</li>`;
    }
    document.getElementById('ArrayList3').innerHTML = ConcatenarResultado;
}