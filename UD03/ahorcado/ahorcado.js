//Arrays que usaremos para jugar.
let palabras = ["lirios", "tulipan", "adelfa", "estramonio", "peyote", "cicuta", "aconito", "belladona", "azalea", "ficus", "hormiga", "mariposa", "avispa", "escarabajo", "escorpion", "araña",
    "libelula", "mantis", "abeja", "saltamontes", "cuarzo", "fluorita", "calcita", "malaquita", "diamante", "granate", "agata", "turquesa", "labrodita", "topacio"];

//Palabra que averiguar.
let palabra = "";
//Numero de vidas.
let ahorcado = 5;

var hueco = document.getElementById("palabra");

//Contador de intentos
var cont = 5;
//Botones de letras.
var buttons = document.getElementsByClassName('letra');
//Botón de reiniciar.
var btnInicio = document.getElementById("reiniciar");
let palabraUsuario = [palabra.length];

//Genera palabra aleatoria
palabra = palabras[Math.floor(Math.random() * palabras.length)];

//Genera guiones en funcion de la longitud de la palabra
generarGuion(palabra);

//Juego terminado
const GAME_IS_OVER = false;


//Variable que penaliza cada 10 seg
 let interval = setInterval(() => {
   cont -= 1;
    console.log('Vidas restantes : ${cont}');
   if (cont === 0) {
      //cuando las vidas llegan a 0 el juego termina
      clearInterval(interval);
        return alert("Te quedaste sin vidas perdiste el juego D:");
   }
 }, 10000);


//Devuelve true o false si la letra existe dentro la palabra. 
function buscarPalabra(wordtoSearch, word) {
    let charArray = wordtoSearch.split('');     //Separa las palabras en un array de caracteres.
    let posArray = [];  //Array vacio para guardar las posiciones de las letras encontradas.
  
    let contador = 0;   //Contador para saber cuantas letras ha encontrado.
    //Variable que guarda la palabra del usuario;
    //console.log(charArray); 
    for (let index = 0; index < charArray.length; index++) {
        if (charArray[index] === word) {
            posArray.push(index);
            palabraUsuario[index] = word;
            contador++;
        }
    }
    return contador > 0 ? posArray : false;
}

//Recibe la letra enviada en el evento onclick
function enviado(letra) {
    let guardar = document.getElementById('letra');
    //console.log(guardar);
    guardar.value += letra;
    //console.log(letra);
    console.log(palabra);
    //console.log(guardar.value);
    let resultadoBusqueda = buscarPalabra(palabra, letra);

    //@PalabraUsuario char array.
    //transfroma el array en cadena para compararlo.
    //@palabra.split() convierte la cadena en un array de character.
    //toLocaleString convierte array a una string
    if (palabraUsuario.toLocaleString() === palabra.split('').toLocaleString()) {
        console.log('juego terminado');
        alert("Has Ganador!!!!!!");
        //Refresca la ventana.
        location.reload();
    }
    console.log(resultadoBusqueda);

    if (resultadoBusqueda.length > 0) {         //Si el resultado es un array comprueba que la longitud sea 0.
        for (let index = 0; index < resultadoBusqueda.length; index++) {
            let letraEncontrada = document.getElementById(resultadoBusqueda[index]);
            letraEncontrada.innerHTML = `<h1>${letra.toUpperCase()}</h1> `;
        }
    }
    //Si no quita una vida.
    else {
        cont -= 1;
        if (cont === 0) {
            alert("Has perdido !!!");
            //Refresca la ventana.
            location.reload();
        };
    }
}

//Genera guiones en funcion de la longitud de la palabra.

function generarGuion(palabra) {
    let contenedorGuiones = document.getElementById('palabraLength');
    //console.log(contenedorGuiones);
    for (let index = 0; index < palabra.length; index++) {
        let guion = document.createElement('span');
        guion.setAttribute('id', index.toString());
        guion.innerText = " ______ ";
        contenedorGuiones.appendChild(guion);
    }
}