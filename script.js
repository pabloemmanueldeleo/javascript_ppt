'use strict';
/* jslint node: true */
/* jshint browser: true */
/* jshint devel: true */
function numeroPar() {
  var numero = document.getElementById('numero').value;

  var salida = document.getElementById('salida');

  if (isNaN(numero)) {
    salida.textContent = 'Tiene que ser un numero.';
  } else {
    var pares = [];
    for (var i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        pares.push(i);
      }
      salida.textContent = 'Numeros pares que se encontraron: ' + pares.join().split(',');
    }

  }
}

function numeroAleatorio(min, max) {
  var salida = document.getElementById('numeroAleatorio');
  var puntaje = document.getElementById('puntaje');

  var num = Math.round(Math.random() * (max - min) + min);

  salida.textContent = 'Numero Aleatorio es: ' + String(num);

  if (num <= 3 && num >= 1) {
    puntaje.textContent = 'Resultado: Ganastes 5 puntos.';
  } else if (num <= 6 && num >= 4) {
    puntaje.textContent = 'Resultado: Ganastes 10 puntos.';
  } else if (num <= 9 && num >= 7) {
    puntaje.textContent = 'Resultado: Ganastes 10 puntos.';
  } else if (num == 10) {
    puntaje.textContent = 'Resultado: Ganastes el juego.';
  } else {
    puntaje.textContent = 'Resultado: Lo siento perdistes.';
  }
}

function ppt(ppt) {
  var compu = document.getElementById('compu');
  var resultado = document.getElementById('resultado');
  var elementos = ['piedra', 'papel', 'tijera'];

  var num = Math.round(Math.random() * (2 - 0) + 0);
  compu.textContent = 'Compu: (' + elementos[num] + ') Vs ' + ' (' + ppt + ')';
  if (elementos[num] === ppt) {
    resultado.textContent = 'Resultado: Empataron.';
  } else if (elementos[num] == 'tijera' && ppt == 'papel' || elementos[num] == 'papel' && ppt == 'piedra' || elementos[num] == 'piedra' && ppt == 'tijera') {
    resultado.textContent = 'Resultado: Perdistes.';
  } else {
    resultado.textContent = 'Resultado: GANASTES, CAPO.';
  }

}

function confirmar() {
  var resultado = window.confirm('Ya existe tu usuario');

  if (resultado) {
    window.alert('Ya existe tu usuario');
  } else {
    window.alert('Hola');
  }
}

function contieneLetra() {
  var texto = document.getElementById('texto').value;
  var letra = document.getElementById('letra').value;
  var salidatexto = document.getElementById('salidatexto');

  if (texto.indexOf(letra) != -1) {
    salidatexto.textContent = 'EL texto contiene la letra ' + letra;
  } else {
    salidatexto.textContent = 'EL texto no contiene la letra ' + letra;
  }
}

function iva() {
  var numero = document.getElementById('niva').value;
  var salidaConIva = document.getElementById('salidaConIva');
  var salidaSinIva = document.getElementById('salidaSinIva');

  if (isNaN(numero)) {
    salidaConIva.textContent = 'Pon un precio para sacar el iva';
  } else {
    var iva = 1.21;
    var totalConIva = numero * iva;
    var totalSinIva = totalConIva / iva;
    salidaConIva.textContent = 'El precio con iva es: ' + totalConIva;
    salidaSinIva.textContent = 'El precio sin iva es: ' + totalSinIva;
  }

}

function sueldo() {
  var numero = document.getElementById('niva').value;
  var salidaConIva = document.getElementById('salidaConIva');
  var salidaSinIva = document.getElementById('salidaSinIva');

  if (isNaN(numero)) {
    salidaConIva.textContent = 'Pon un precio para sacar el iva';
  } else {
    var iva = 1.21;
    var totalConIva = numero * iva;
    var totalSinIva = totalConIva / iva;
    salidaConIva.textContent = 'El precio con iva es: ' + totalConIva;
    salidaSinIva.textContent = 'El precio sin iva es: ' + totalSinIva;
  }

}

/*

EJERCICIO N°9
"Realizar una funcion que tome un array como parametro
y muestre por pantalla la cantidad de elementos tipo number,
la cantidad de elementos tipo string y la cantidad de elementos tipo boolean.
Luego llamar a la funcion con 3 arrays distintos."

*/

var array1 = [true, 'Hola', 24534, 25, 35, 'Roberto', false, true];
var array2 = [true, 'Hola'];
var array3 = [35, 'Roberto', false, true];


function revisarTipo(arrayARecorrer) {

  var contadorString = 0;
  var contadorBooleanos = 0;
  var contadorNumeros = 0;

  for (var i = 0; i < arrayARecorrer.length; i++) {

    if (typeof(arrayARecorrer[i]) === 'string') {

      contadorString++;
      //contadorString = contadorString + 1;

    } else if (typeof(arrayARecorrer[i]) === 'boolean') {

      contadorBooleanos++;

    } else if (typeof(arrayARecorrer[i]) === 'number') {
      contadorNumeros++;
    }

  }

  console.log('La cantidad de Numeros que tiene el array es de ' + contadorNumeros);
  console.log('La cantidad de strings que tiene el array es de ' + contadorString);
  console.log('La cantidad de Boleanos que tiene el array es de ' + contadorBooleanos);
  console.log('////////');

}
/*

EJERCICIO N°6

Dado el siguiente array,
crear una funcion la cual reciba un array de empresas
y le quite todos los elementos\
que estén despues de la posicion donde esté Google.

*/

var empresas = ['Nintendo', 'Google', 'Microsoft', 'Apple', 'Samsung', 'Sony'];
var empresasDeRopa = ['Levis', 'Kevingston', 'UMA', 'Puma', 'ELVIS'];

function eliminarCompetencia(arrayDeEmpresas, empresaLider) {

  //Array de atras para adelante
  for (var i = arrayDeEmpresas.length - 1; i >= 0; i--) {

    console.log(i);
    console.log(arrayDeEmpresas[i]);

    if (arrayDeEmpresas[i] !== empresaLider) {

      arrayDeEmpresas.pop();

    } else {
      break;
    }

  }

  console.log(arrayDeEmpresas);

}

eliminarCompetencia(empresas, 'Apple');
/*

EJERCICIO N°10
"Dado el array "Paises", mostrar todo su contenido por pantalla."

*/

var paises = [
	["Buenos Aires", "Tucumán", "Salta", "Chubut"],
	["Río de Janeiro", "San Pablo"],
	["Montevideo", "Canelones"]
];


for (var i = 0; i < paises.length; i++) {

	console.log(paises[i]);

	for (var j = 0; j < paises[i].length; j++) {

		console.log(paises[i][j]);

	}

}
