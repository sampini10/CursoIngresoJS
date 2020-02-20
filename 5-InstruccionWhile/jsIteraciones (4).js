function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = prompt("No es un valor correcto");
	}
	document.getElementById("Numero").value = numero;
	// while (numero < 0 || numero > 9 || isNaN (numero))
	// seria que si el numero es menor a "0" o mayor a "9" o NO es un numero. Va a pedir que ingresemos un valor entre el 0 y el 9 
	//while (!(numero >= 0 && numero <=9 )) 
	// si el numero NO ES mayor o igual que "0" y menor o igual que "9". Es erroneo
	// DOS FORMAS DE HACERLO.
}
//FIN DE LA FUNCIÓN
