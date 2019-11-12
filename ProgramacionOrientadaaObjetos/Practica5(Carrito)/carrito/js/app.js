const carrito = document.getElementById('carrito');//es un tag div
const cursos = document.getElementById('lista-cursos');//es un tag div
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');//es un vínculo
const objectCar= new Carrito();


EventListener();
function EventListener(){
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', EliminarCourse);
    document.addEventListener('DOMContentLoaded', MostrarCursosCarrito);
    vaciarCarrito.addEventListener('click',VaciarCarritoCursos);
}

function MostrarCursosCarrito(){
    objectCar.ShowCoursesLSCar();
}

function GetCourse(event){
    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')){
        let Course = event.target.parentElement.parentElement;
        console.log(Course);

        let objectCar = new Carrito();
        objectCar.readDataCourse(Course, listaCursos);
    }
}
function EliminarCourse(event){
    objectCar.EliminarCursoCarrito(event);
}

function VaciarCarritoCursos(){
    objectCar.VaciarCarrito(listaCursos);
}