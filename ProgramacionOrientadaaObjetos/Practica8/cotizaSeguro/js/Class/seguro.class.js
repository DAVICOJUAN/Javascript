class Seguro{
    constructor(marca, anio, tipo){
        this.marca=marca;
        this.anio=anio;
        this.tipo=tipo;
    }
    cotizarSeguro(){
        /* ================================
           1= americano cobra 1.15
           2 = asiatico cobra 1.05
           3 = europeo  cobra 1.35
        ==================================*/

        let cantidad;
        const base= 2000;//segun el tipo de carro que sea se le va incrementando a la base
        switch(this.marca){
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }

        const diferencia = new Date().getFullYear()- this.anio;
        cantidad -=((diferencia*3)*cantidad)/ 100;
        if(this.tipo==='basico'){
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }
        return cantidad;
    }
}