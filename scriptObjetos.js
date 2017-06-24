'use strict';
/* jslint node: true */
/* jshint browser: true */
/* jshint devel: true */

var animal = {
  tipo: 'Gato',
  color: 'Verde'
};
console.log(animal);
console.log(animal.tipo);
console.log(animal.color);

var cancion = {
  id: 24,
  letra: 'dessspaciiittoooo...',
  autor: 'Luis Fonsi',
  duracion: '3 minutos',
};

for (var variable in cancion) {
  console.log(variable);
  console.log(cancion[variable]);
}
/*

EJERCICIO N°2
"Dado el objeto "Paises",
mostrar en una lista todas sus provincias"

*/

var paises = {
  argentina: ["Buenos Aires", "Tucumán", "Salta", "Chubut"],
  brasil: ["Río de Janeiro", "Brasilia", 'San Pablo', 'Buzios'],
  uruguay: ["Montevideo", 'Canelones', 'Colonia', 'Rocha'],
};


for (var key in paises) {

  console.log(key);

  for (var i = 0; i < paises[key].length; i++) {
    console.log('- ' + paises[key][i]);
  }

}

var gato = {
  id: 1,
  nombre: 'Nando',
  tamano: 'Grande',
  color: 'Gris',
  raza: 'Cruza siames',
  edad: 6,
  esBueno: true,
  hablar: function() {
    console.log('miauuuuuuuuu');
  }
};
for (var variable in gato) {
  console.log(gato);
}

/*

EJERCICIO N°4
"Dado el siguiente objeto, crear sus setters y getters."
-Crear tambíen un método que muestre por pantalla si la persona
puede entrar en una montaña rusa (Altura > 1.5).
*/





var persona = {
  nombre: "Bart",
  apellido: "Simpson",
  edad: 10,
  altura: 1.3,
  colorDePelo: "Rubio",
  getNombre: function() {
    console.log(this.nombre);
  },
  getApellido: function() {
    console.log(this.apellido);
  },
  setNombre: function(valorNuevo) {
    this.nombre = valorNuevo;
  }
};
// Hacer un objeto que represente un Auto
//
// Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
// Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.
var auto = {
  color: '#0000FF',
  modelo: 95,
  patente: 'AFK123',
  marca: 'Ford',
  prendido: false,
  velocidad: 0,
  velocidadMaxima: 60,
  arrancar: function() {

    if (!this.prendido) {
      this.prendido = true;
    } else {
      console.log('Ya esta prendido maestro...');
    }

  },
  apagar: function() {

    if (this.prendido) {
      this.prendido = false;
      this.velocidad = 0;
    } else {
      console.log('Que quere apagar...');
    }
  },
  acelarar: function() {

    if (this.velocidad < this.velocidadMaxima) {
      this.velocidad = this.velocidad + 10;
    } else {
      console.log('Ya estas en la velocidad maxima.');
    }

  }
};
