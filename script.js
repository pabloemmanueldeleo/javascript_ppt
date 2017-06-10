'use strict';

function numeroPar () {
  var numero = document.getElementById('numero').value

	var salida = document.getElementById('salida')

	if (isNaN(numero)){
			salida.textContent = 'Tiene que ser un numero.'
	}else{
		var pares=[];
		for (var i = 1; i <= numero; i++) {
			if ( i % 2 === 0){
				pares.push(i);
			}
			salida.textContent = 'Numeros pares que se encontraron: '+ pares.join().split(',') ;
		}

	}
}

function numeroAleatorio(min, max) {
	var salida = document.getElementById('numeroAleatorio');
	var puntaje = document.getElementById('puntaje');

	var num = Math.round(Math.random() * (max - min) + min);

	salida.textContent='Numero Aleatorio es: ' + String(num);

	if (num <= 3 && num >= 1){
		puntaje.textContent='Resultado: Ganastes 5 puntos.';
	}
	else if (num <= 6 && num >= 4) {
		puntaje.textContent='Resultado: Ganastes 10 puntos.';
	}
	else if (num <= 9 && num >= 7) {
		puntaje.textContent='Resultado: Ganastes 10 puntos.';
	}
	else if (num == 10) {
		puntaje.textContent='Resultado: Ganastes el juego.';
	}
	else{
		puntaje.textContent='Resultado: Lo siento perdistes.';
	}
}
function ppt(ppt) {
	var compu=document.getElementById('compu');
	var resultado=document.getElementById('resultado');
	var elementos=['piedra','papel','tijera'];

	var num = Math.round(Math.random() * (2 - 0) + 0);
	compu.textContent = 'Compu: ('+ elementos[num] + ') Vs ' + ' (' + ppt + ')';
	if(elementos[num] === ppt) {
			resultado.textContent ='Resultado: Empataron.';
		}
	else if (elementos[num] == 'tijera' && ppt == 'papel' || elementos[num] == 'papel' && ppt == 'piedra' || elementos[num] == 'piedra' && ppt == 'tijera') {
		resultado.textContent ='Resultado: Perdistes.';
	}else {
		resultado.textContent ='Resultado: GANASTES, CAPO.';
	}

}
function confirmar() {
	var resultado=confirm('Ya existe tu usuario')

	if (resultado) {
		alert('Ya existe tu usuario')
	}else{
		alert('Hola')
	}
}
function contieneLetra(str, letra){
	if (str.indexOf(letra)!= -1){
		return console.log('EL texto contiene la letra '+ letra);
	}else{
		return console.log('El texto no contiene una letra '+ letra);
	}
}
function contiene(){
	var texto = document.getElementById('texto').value;
	var letra = document.getElementById('letra').value;
	var salidatexto = document.getElementById('salidatexto');
	console.log('ffasfasfasfasf')
	console.log(texto)
	var t=contieneLetra(texto,letra)
	if (t){
	salidatexto.textContent='Contiene la letra ' + letra;
}else{
	salidatexto.textContent='No contiene la letra ' + letra;
}


}
