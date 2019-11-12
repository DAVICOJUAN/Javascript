
EventListener();

let arrayPositionPrize = [];

function EventListener(){
    document.addEventListener('keydown',MoveCar);
    document.getElementById('contenedor').addEventListener('click',SetPrize);
    //ImagenCarro.addEventListener('keypress',MoveCar);
}

// function CalculateMargin() {
//     Prize.CalculateMargin();
// }

let car = new Car(0,0);

function MoveCar(event){
    let image=document.getElementById('car');
    switch(event.key){
        case 'ArrowRight':
            car.moveRight(image);
            break;
        case 'ArrowLeft':
            car.moveLeft(image);
            break;
        case 'ArrowUp':
            car.moveTop(image);
            break;
        case 'ArrowDown':
            car.moveBottom(image);
            break;    
    }
    if(arrayPositionPrize.length>0){
        let resultado = car.currentPosition(arrayPositionPrize,image);
        console.log(resultado);
    }

}

function SetPrize(event){
    let prize = new Prize();
    
    prize.PositionX(event.clientX);
    prize.PositionY(event.clientY);

    arrayPositionPrize.push(prize.createElementImg());

    console.log(arrayPositionPrize);
}