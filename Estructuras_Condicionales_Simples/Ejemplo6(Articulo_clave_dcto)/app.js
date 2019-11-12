let bntCalcular = document.getElementById('btnCalcular');
eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', Informacion);
}

function Informacion() {
    let articulo = document.getElementById('nombre_articulo').value;
    let clave = document.getElementById('clave_articulo').value;
    let precio = document.getElementById('precio_original').value;

    clave = Number(clave);
    precio = Number(precio);

    let imprimirarticulo = document.getElementById('articulo');
    let imprimirclave = document.getElementById('clave');
    let imprimirprecio = document.getElementById('precio');
    let imprimirpreciodcto = document.getElementById('precio_dcto');

    let descuento = 0,
        pre_tot = 0;

    if (clave == 2) {
        descuento = precio * 0.2;
        pre_tot = (precio - descuento);

        imprimirarticulo.innerHTML = `${articulo}`;
        imprimirclave.innerHTML = `${clave}`;
        imprimirprecio.innerHTML = `${precio}`;
        imprimirpreciodcto.innerHTML = `$ ${pre_tot}`;
    } else {
        if (clave == 1) {
            descuento = precio * 0.1;
            pre_tot = (precio - descuento);

            imprimirarticulo.innerHTML = `${articulo}`;
            imprimirclave.innerHTML = `${clave}`;
            imprimirprecio.innerHTML = `${precio}`;
            imprimirpreciodcto.innerHTML = `$ ${pre_tot}`;
        } else {
            imprimirarticulo.innerHTML = `${articulo}`;
            imprimirclave.innerHTML = `Ingrese Clave Valida`;
            imprimirprecio.innerHTML = `$ ${precio}`;
            imprimirpreciodcto.innerHTML = `Error: Sin descuento`;

        }
    }
}