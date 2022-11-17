//LAS FUNCIONES:
//setTimeout() y setInterval()

/* 
    - setTimeout(funcion_a_llamar, milisegundos):
        Ejecutará la función "funcion_a_llamar" transcurrido el tiempo
        indicado en "milisegundos"
    - setInterval(funcion_a_llamar, milisegundos):
        La función "funcion_a_llamar" de manera periódica
        según los milisegundos introducidos en el segundo parámetro.

    - clearInterval(funcion_llamada_por_setInterval). 
        Para la ejecución del setInterval.

    - clearTimeout():
        Para la ejecución iniciada con setTimeout().
*/

//crono();
function crono () {
    let laMevaData = new Date();
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();
    let ampm = '';

          
        if(horas < 12){ 
            horas -= 12; 
            ampm = 'pm';
        } else {
            ampm = 'am';
        }
        if(horas < 10) { horas = '0'+ horas; }
        if(minutos < 10) { minutos = '0'+ minutos; }
        if(segundos < 10) { segundos = '0'+ segundos; }

        let text = document.getElementById('horas');
        text.innerHTML = horas + ':' + minutos + ':' + segundos + ampm;
}

let elCrono;
window.onload = function() {
    elCrono = setInterval(crono, 1000);          
}