function mostrar() {
    var letra;
    var numero;
var seguir;
var contadorPares = 0;
var contadorImpares = 0;
var contadorCeros = 0;
var acumuladorPos = 0;
var contadorPos = 0;
var promedioPos;
var acumuladorNeg = 0;
var numeroMax;
var numeroMin;
var letraMax;
var letraMin;
var flag = 0;

    do {
        letra = prompt("Ingrese una letra: ");
        while (!(letra >= "A" && letra <= "Z" || letra >= "a" && letra <= "z"));
        letra = prompt("Eso no es una letra. Ingrese una letra : ");

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero"));

        }
        seguir = prompt("Quiere continuar?:");
    } while (seguir == "s");

   
}
