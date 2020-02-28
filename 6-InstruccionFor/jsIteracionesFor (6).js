function mostrar() {
    var numero;
    var contadorPares = 0;
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Eso no es un numero.Ingrese otro"));
    }
    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
          //aca solo se entra cuando i tiene un valor par
            console.log(i);
            contadorPares++;
        }
    }

console.log("Cantidad de pares encontrados: " + contadorPares);

}//FIN DE LA FUNCIÓN