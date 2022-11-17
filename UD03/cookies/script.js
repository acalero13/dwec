//Elements HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar");
let misCookies = document.getElementById("misCookies");

//Funciones
//Crear una cookie
function crearCookie() {
    //let usuarioCookie = "Ana";
    //document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
    document.cookie = "cookie=ana;expires=02 Nov 2022 20:00:00Z";
   
}
//Mostrar las cookies
function mostrarCookies() {
    misCookies.innerHTML = document.cookie;
}
function eliminarCookies() {
    document.cookie = "cookie=; max-age=0";
}
//Eventos
crear.addEventListener('click', crearCookie, false);
mostrar.addEventListener('click', mostrarCookies, false);
eliminar.addEventListener('click', eliminarCookies, false);