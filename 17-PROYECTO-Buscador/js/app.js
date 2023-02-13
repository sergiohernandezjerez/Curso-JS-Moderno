//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    //llena las opciones de año
    llenarSelect();
})



//funciones
function mostrarAutos(){
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

function llenarSelect(){
        for(let i = max; i > min; i--){
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);
        }
    }