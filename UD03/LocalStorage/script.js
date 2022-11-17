//Elements HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar");
let miLocalStorage = document.getElementById("miLocalStorage");

//Funciones
//Crear 
function crearLocalStorage() {
    localStorage.setItem("usuario", "Ana");
}
//Mostrar 
function mostrarLocalStorage() {
    for(let index = 0; index <localStorage.length; index++) {
        //miLocalStorage.innerHTML = localStorage.getItem("usuario");
        const element = localStorage.getItem(localStorage.key(index));
        miLocalStorage.innerHTML += element;
    }
}
function eliminarLocalStorage() {
   localStorage.removeItem("usuario");
}
//Eventos
crear.addEventListener('click', crearLocalStorage, false);
mostrar.addEventListener('click', mostrarLocalStorage, false);
eliminar.addEventListener('click', eliminarLocalStorage, false);