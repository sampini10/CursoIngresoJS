function mostrar() {
    var numero;
    var contadorDivisor = 0
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)) { numero = parseInt(prompt("Eso no es un numero. Ingrese otro")); }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            contadorDivisor++;
        }

    }
console.log("Cantidad de divisores encontrados: "+ contadorDivisor);
}//FIN DE LA FUNCIÓN