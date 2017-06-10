function numeroPar() {
	var numero = document.getElementById('numero').value;

	var salida = document.getElementById('salida');

	if (isNaN(numero)){
			salida.textContent = 'Tiene que ser un numero.';
	}else{
		var pares=[];
		for (var i = 1; i < numero.length; i++) {
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
			
}
