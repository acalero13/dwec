const contenidor = document.querySelector('.contenidor');   //obtiene solo uno, el primero.
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');      
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let precioTicket = +peliculaSelect.value;

console.log(typeof precioTicket);

//ACTUALITZA ELS TOTALS
function actualitzaSeleccioSeients() {
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');
    /*console.log(seientsSeleccionats);*/

    const seientIndex = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));



    /*const arrA = [1, 2, 3];
    const arrB = arrA.map(function(item) {
        return item*2;      
    });*/

    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientIndex));

    const contadorSeientsSeleccionats = seientsSeleccionats.length;
    contador.innerText = contadorSeientsSeleccionats;
    total.innerText = contadorSeientsSeleccionats * precioTicket;
} 

//Guarda el LocalStorage el indice y el precio de la pelicula seleccionada.
function guardaInfoPelicula(indexPelicula, precioPelicula) {
    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula); 
    localStorage.setItem('indexPeliculaSeleccionada', precioPelicula);
}

//Recupera la información del LocalStorage y lo rellena la UI
function ompleUI () {
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    if(seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
        seients.forEach((seients, index) => {
            //console.log(seient)

            if(seientsSeleccionats.indexOf(index)){
                seient.classList.add('seleccionat');
            }
        });
    }
    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');

    if(indexPeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const precioPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');

    if(precioPeliculaSeleccionada !== null) {
        precioTicket = +precioPeliculaSeleccionada;
    }
}


//EVENTOS
contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('seient') && !e.target.classList.contains('ocupat')) {
        console.log(e.target);
       e.target.classList.toggle('seleccionat');

        actualitzaSeleccioSeients(e.target.selectedIndex, e.target.value);
    }
});

peliculaSelect.addEventListener('click', (e) => {
    precioTicket = +e.target.value;

    guardaInfoPelicula();
});

