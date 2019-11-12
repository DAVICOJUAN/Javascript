const notebook = document.getElementById('notebook');//div que contiene la tabla de contactos
const listaNote = document.querySelector('#lista-agenda tbody');
const vaciarAgenda = document.getElementById('vaciar-agenda');//es un vínculo
const contacto = document.getElementById('guardar');//es un id de boton
const objectAgenda = new Agenda();

EventListener();
function EventListener(){
    contacto.addEventListener('click',readContact);
}


function readContact(){
    let contentContact = document.getElementById('nombre-agenda').value.trim();
    let contentPhone = document.getElementById('telefono-agenda').value.trim();
    contentPhone=Number(contentPhone);
    objectAgenda.addContact(contentContact, contentPhone);
    console.log(contentContact);
    console.log(contentPhone);
}