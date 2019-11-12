class Car{
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX,posicionY){
        this.posicionX=posicionX;
        this.posicionY=posicionY;
    }

    moveRight(Img){
        if(this.posicionX<100){
            Img.src="./Imagenes/carro-rojo-derecha.png";
            Img.style.width='55px';
            Img.style.height='26px';

            Img.style.left = (this.posicionX++) + "%";
            console.log(this.posicionX);
            
        }
    }
    moveLeft(Img){
        if(this.posicionX>=0){
            
        Img.src="./Imagenes/carro-rojo-izquierda.png";
        Img.style.width='55px';
        Img.style.height='26px';

        Img.style.left = (this.posicionX--) + "%";
        }
    }
    moveTop(Img){
        if(this.posicionY>=0){
            Img.src="./Imagenes/carro-rojo-arriba.png";
            Img.style.width='26px';
            Img.style.height='55px';

            Img.style.top = (this.posicionY--) + "%";
        }
        
    }
    moveBottom(Img){
        if(this.posicionY<=100){
            Img.src="./Imagenes/carro-rojo-abajo.png";
            Img.style.height='55px';
            Img.style.width='26px';

            Img.style.top = (this.posicionY++) + "%";
        }
    }
        currentPosition(arrayPositionPrize,image){

            let PositionCarX = image.x;
            let PositionCary = image.y;

            for(let i = 0; i<arrayPositionPrize.length;i++){
                let PositionXPrize = arrayPositionPrize[i].posX;
                let PositionYPrize = arrayPositionPrize[i].posY;
                console.log(`Coordenadas carrito`,PositionCarX,PositionCary);
                console.log(`Coordenadas Imagen`, PositionXPrize, PositionYPrize);
                if(PositionCarX >=PositionXPrize -25 && PositionCarX <= PositionXPrize +25 && PositionCary >= PositionYPrize -25 && PositionCary <= PositionYPrize + 25){
                    return true;
                }

            }
            return false;
        }

    }
