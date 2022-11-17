let arrayPalabras = ["Papel", "Piedra", "Tijeras", "Lagarto", "Spock"];     //array de palabras que buscaremos en un texto.


function buscaEleccion(introducirTexto) {
    for(let i = 0; i < arrayPalabras.length; i++) {
        let posicion = introducirTexto.indexOf(arrayPalabras[i]);       //guarda la posición de la palabra si esta en el texto.
        document.write(posicion);
        console.log(posicion);
    }
}

function juego() {
    let preguntaUsuario = prompt("¿Cual es tu nombre?");        //pregunta al usuario su nombre
    let introducirTexto = prompt("¿Que quieres introducir como texto?");        //pregunta que texto quiere introducir para comparar.
    buscaEleccion(introducirTexto);

    /*document.getElementById('content').innerHTML = <h2>Has introducido ${introducirTexto} de ${buscaEleccion}</h2>*/
}

let min = arrayPalabras[0];
let max = arrayPalabras[5];

function getRandomInt(min, max) {       //aleatorio
    return Math.floor(Math.random() * (max - min)) + min;    
}
console.log(getRandomInt); 
