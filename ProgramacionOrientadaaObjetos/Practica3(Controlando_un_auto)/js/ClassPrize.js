class Prize {
    posicionX=0;
    posicionY=0;
    sizeMargin = 0;
    constructor(){
        this.calculateSizeMargin();
    }
    PositionX(posicionX){
        this.posicionX= posicionX;
    }
    PositionY(posicionY){
        this.posicionY= posicionY;
    }

    calculateSizeMargin(){
        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginleft = marginContainer.getPropertyValue('margin-left');
        this.sizeMargin = marginleft.substring(0, marginleft.length - 2);
    }

    // get posicionX(){
    //     return this.posicionX;
    // }
    // get posicionY(){
    //     return this.posicionY;
    // }

    createElementImg(){
        
        // let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));

        // let marginleft= marginContainer.getPropertyValue('margin-left');
        // marginleft= marginleft.substring(0, marginleft.length-2);

        // let marginContainer =marginContainer.substring(0,marginContainer.length - 2);



        
        let ImageCreate = document.createElement('img');
        ImageCreate.setAttribute('src','./Imagenes/premio-auto.jpg');

        ImageCreate.style.width="50px";

        let posX= (this.posicionX - this.sizeMargin)-25;
        let posY= this.posicionY - 25;

        ImageCreate.style.left=`${this.posX}px`;
        ImageCreate.style.top=`${this.posY}px`;
        document.getElementById('contenedor').appendChild(ImageCreate);

        return {posX, posY}

    }
}