//Array de palabras definidas.
let palabras = [["H","o", "l","a"],
    ["P","a","g","i","n","a"],
    ["P","a", "c","o"],
    ["C","a", "d","e","n", "a"],
    ["A","n","a"]];

//Palabra que averiguar.
let palabra = "";
//Variable para comparar.
let comparar=["_","_","_","_"];
//Numero de vidas.
let ahorcado = 5;
//Guarda el historial.
let historial = "";

var hueco = document.getElementById("palabra");

// Contador de intentos
var cont = 5;
// Botones de letras.
var buttons = document.getElementsByClassName('letra');
// Botón de reiniciar.
var btnInicio = document.getElementById("reiniciar");

palabra = palabras[Math.floor(Math.random()*palabras.length)];



while((comparar.includes("_") && ahorcado!=0)) {
    let letra = prompt("Escribe una letra: ");
    let guardar = document.getElementById(letra);
    let extra = false;

    if(letra.length==1) {
        for(let i = 0; i <palabra.length; i++) {
            if(palabra[i]==letra) {
                comparar[i] == letra;
                extra = true;
            }
        }

        if(extra==false) {
            ahorcado--;
            historial+=letra + ", ";
        }
        if(ahorcado!=0) alert(comparar.join()+"\nTe quedan "+ ahorcado +" vidas.\n"+"Letras usadas: " + historial);
    } else {
        
        if(letra.split("")!=palabra.join()) {
            ahorcado--;
            historial += letra + ", ";
        } else {
            for(let x = 0; x < comparar.length; x++) {
                comparar[x] = letra.split("")[x];
            }
        }
    }
}
if(!comparar.includes("_")) {
    document.write("Has ganado. ");
}
if(ahorcado==0) {
    document.write("Has perdido. ");
}

