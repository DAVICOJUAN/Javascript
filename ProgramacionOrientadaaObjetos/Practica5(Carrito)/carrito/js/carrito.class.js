class Carrito{
    
    constructor(){

        this.LS = new LocalStorage();

    }

    readDataCourse(curso, listaCursos){
        const dataCourse={
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id:curso.querySelector('a').getAttribute('data-id')
        }

        this.addCourseCar(dataCourse,listaCursos);
    }

    addCourseCar(dataCourse, listaCursos){
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>
        <img src="${dataCourse.imagen}" width=100>    
        </td>

        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a>
        </td>
        `;
        listaCursos.appendChild(row);
        this.LS.SaveCourseLocalStorage(dataCourse); 
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Curso añadido a carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }

    eliminarCursoLS(curso){
        let cursosLS;
        cursosLS=this.LS.GetCoursesLocalStorage();
        cursosLS.forEach(function(cursoLS,index){
            if(cursoLS.id===curso){
                cursosLS.splice(index,1);
            }
        })
    }

    EliminarCursoCarrito(event){
        event.preventDefault();
        let curso, cursoId;
        if(event.target.classList.contains('borrar-curso')){
            curso = event.target.parentElement.parentElement;
            cursoId=curso.querySelector('a').getAttribute('data-id');
            curso.remove();
            this.LS.eliminarCursoLS(cursoId);
            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Curso eliminado de carrito',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }

    ShowCoursesLSCar(){
        
        let CoursesLS = this.LS.GetCoursesLocalStorage();
        CoursesLS.forEach(function(curso){
            const row = document.createElement('tr');
            row.innerHTML=`
            <td>
            <img src="${curso.imagen}" width=100>    
            </td>
    
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
            `;
            listaCursos.appendChild(row);
        })
    }

    VaciarCarrito(listaCursos){
        //Forma lenta
        //listaCursos.innerHTML="";

        //Forma Rapida
        while(listaCursos.firstChild){
            listaCursos.removeChild(listaCursos.firstChild)
        }
        this.LS.vaciarLS();
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Carrito vaciado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
    }
}