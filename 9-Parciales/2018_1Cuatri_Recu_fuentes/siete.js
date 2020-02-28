function mostrar() {
    var nota;
    var sexo;
    var promedio;
    var contadorVaronesMas6 = 0;
    var acumuladorNotas = 0;
    var notaBaja;
    var sexoBajo;
    var flag = 0;

    //pido datos repetitivos uso for
    for (var i = 0; i < 5; i++) {
        nota = parseInt(prompt("Ingrese nota"));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parent(prompt("Nota invalida"));
        }
        sexo = prompt("Ingrese sexo f-m");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Sexo invalido");
        }
        if (flag == 0 || nota < notaBaja) {
            notaBaja = nota;
            sexoBajo = sexo
            flag = 1;
        }
        acumuladorNotas = acumuladorNotas +nota;
        if ( sexo == "m" && nota >= 6){
            contadorVaronesMas6++;
        }
        }
        promedio = acumuladorNotas / 5;
        alert("Promedio notas " + promedio)



    }
