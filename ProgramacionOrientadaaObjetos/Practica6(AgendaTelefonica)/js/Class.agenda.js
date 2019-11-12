class Agenda{

    nombre='';
    celular='';

    constructor(){
        this.LS = new LocalStorage();
    }
    addContact(contentContact,contentPhone){
        if(contentContact!='' && contentPhone!=''){
            this.nombre=contentContact;
            this.celular=contentPhone;
            
        }else{
            Swal.fire({
                position: 'top-end',
                type: 'warning',
                title: 'Contacto y Número telefónico vacíos',
                showConfirmButton: false,
                timer: 1500
            }) 
        }
    }
}