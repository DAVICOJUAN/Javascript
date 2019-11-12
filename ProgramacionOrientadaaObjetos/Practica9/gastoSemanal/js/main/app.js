const formulario = document.getElementById('agregar-gasto');

let cantidadPresupuesto;

eventListener();

function eventListener(){
    formulario.addEventListener('submit',GuardarPresupuesto);
    document.addEventListener('DOMContentLoaded',iniciarAplicacion);
}

async function iniciarAplicacion(){
    const { value: PresupuestoIngresado } = await Swal.fire({
        title: 'Ingrese presupuesto:',
        input: 'text',
        inputPlaceholder: 'Ingresa tu presupuesto'
      })
      
      if (!PresupuestoIngresado) {
        window.location.reload();
        return;
      }

      if(isNaN(PresupuestoIngresado)){
          window.location.reload();
          return;
      }

      cantidadPresupuesto = new Presupuesto(PresupuestoIngresado);
      const ui = new interfaz();
      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
}

function GuardarPresupuesto(event){
    event.preventDefault();
    const nombreGasto = document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');

    nombreGasto.disabled = true;
    cantidadGasto.disabled = true;

    const ui = new interfaz();
    if (isNaN(cantidadGasto.value)){
        ui.imprimirMensaje('Solo datos numericos en cantidad', 'error', nombreGasto, cantidadGasto);
        return;
    }

    if(nombreGasto.value==='' || cantidadGasto.value===''){
        ui.imprimirMensaje('Hubo un error', 'error', nombreGasto, cantidadGasto);
        return;
    }
        ui.imprimirMensaje('Correcto', 'correcto', nombreGasto, cantidadGasto);
        ui.agregarGastoListado(nombreGasto.value,cantidadGasto.value);
        ui.presupuestoRestante(cantidadGasto.value);
    
}