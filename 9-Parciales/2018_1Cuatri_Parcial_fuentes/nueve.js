function mostrar() {
    var marca
    var peso
    var temperatura
var seguir

    do {
        marca = prompt("Ingrese marca de producto");

        peso = parseInt(prompt("Ingrese peso del producto (1-100kg):"))
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("No es un peso valido"));
        }
        temperatura = parseInt(prompt("Ingrese temperatura de almacenamiento (-30 y 30 ºc"))
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("No es una temperatura valida"));
        }
        seguir = prompt("Quiere seguir ingresando?: ")
    
    } while (seguir == "s");
}