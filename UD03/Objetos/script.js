function coche(marca,modelo, color, kms, combustible) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}

let miCoche = new coche("Ferrari", "Testarosa", "Rojo", 100, "gasolina");
let tuCoche = new coche("Ford", "Fiesta", "Azul", 150000, "diesel");

let otroCoche = miCoche;        //apunta a la variable miCoche.

miCoche.color = "Rosa";     //los dos coches cambian a color rosa, ya que apuntan al mismo objeto.


console.log(miCoche);
console.log(tuCoche);

let unCliente = {
    nombre: 'Pau Pau', 'dirección del cliente': 'c/Desconocida'
};



//FUNCIONES AUXILIARES
function muestraCamposYValores(miObjeto) {
    for(campo in miObjeto) {
        if(typeof(miObjeto[campo] == 'object')) {
            muestraCamposYValores(miObjeto[campo]);
        }
        else {
            console.log(campo + ':' + miObjeto[campo]);
        }
    }
}

const nombre = [];

