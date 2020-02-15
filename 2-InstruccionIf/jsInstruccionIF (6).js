function mostrar() {
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    if (edad < 13) {
        alert("Es niño")
    }
    else if (edad >= 13 && edad <= 17) {
        alert("Es adolecente");
    }
    else { alert("Es adulto") }





}//FIN DE LA FUNCIÓN