class interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML=`${cantidad}`;
        restanteSpan.innerHTML=`${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo, nombreGasto, cantidadGasto){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        if(tipo=='error'){
            divMensaje.classList.add('alert-danger');
        }else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            nombreGasto.disabled=false;
            cantidadGasto.disabled=false;
            formulario.reset();
        }, 3500)
    }

    agregarGastoListado(nombre, cantidad){

        console.log(nombre, cantidad);
        
        let gastoslistados = document.getElementById('lista-gastos');
        console.log(gastoslistados);
        
        const li = document.createElement('li');
        li.className= 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
        ${nombre}
        <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`
        gastoslistados.appendChild(li);
    }

    presupuestoRestante(cantidad){
        const restante= document.querySelector('span#restante');
        const PresupuestoRestanteUsuario=cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML=`${PresupuestoRestanteUsuario}`;
    }
}