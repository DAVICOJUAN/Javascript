class Voto{
    afavor=0;
    encontra=0;
    abstencion=0;

    constructor (Afavor,EnContra,Abstencion){
        this.afavor=Afavor;
        this.encontra=EnContra;
        this.abstencion=Abstencion;
    }

    VotoaFavor(){
        this.afavor++;
        return afavor;
    }
    VotoenContra(){
        this.encontra++;
        return encontra;
    }
    VotoAbstencion(){
        this.abstencion++;
        return abstencion;
    }
}