//variables
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const max = new Date().getFullYear();
const min = max - 10;

//generar objeto
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: '',
}


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    //llena las opciones de año
    llenarSelect();
})

//event listener para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
})

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})


//funciones
function mostrarAutos(autos){
    limpiarHTML();

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - ${precio}€ - Color: ${color}
        `;
        
        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
        for(let i = max; i > min; i--){
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);
        }
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecio).
    filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        mostrarMensaje();
    }
    
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }else{
        return auto;
    }
}

function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === year;
    }else{
        return auto;
    }
}

function filtrarPrecio(auto){
    const {minimo, maximo} = datosBusqueda;
    if(minimo && !maximo){
        return auto.precio >= minimo;
    }else if(!minimo && maximo){
        return auto.precio <= maximo;
    }else if(minimo && maximo){
        return auto.precio <= maximo && auto.precio >= minimo;
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }else{
        return auto;
    }
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }else{
        return auto;
    }
}

function filtrarColor(auto){
    const {color} = datosBusqueda;

    if(color){
        return auto.color === color;
    }else{
        return auto;
    }
}

function mostrarMensaje(){
    limpiarHTML();

    const autoHTML = document.createElement('P');
    autoHTML.textContent = "No se ha encontrado una busqueda válida.";
    autoHTML.classList.add('error', 'alerta');
    resultado.appendChild(autoHTML);
}
