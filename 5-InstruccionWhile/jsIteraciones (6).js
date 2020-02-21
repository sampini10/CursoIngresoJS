function mostrar() {
	var contador = 0
	var acumulador = 0
	var promedio

	while (contador < 5) {
		numero = parseInt(prompt("inserte un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero.inserte un numero"));
		}
		acumulador = acumulador + numero;

		contador++;
	}
	// promedio se calcula fuera de while por que es una repetitiva
	promedio = acumulador / 5;
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN