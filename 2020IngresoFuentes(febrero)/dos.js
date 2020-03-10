function mostrar()
{
    var peso = 0
    var precio = 0
    var validad
    var seguir 
    var nohaypreciominimomaximo = true
    var importetotal
    var descuento15
    var descuento25
    var acumuladorprecio
    var alimentomascaro
    var promedioprecio
    var acumuladorprecio
    var contadorprecio

    do{

      peso = parseInt(prompt("ingrese peso entre 10 y 1000 kgs"))
      while(isNaN(precio && precio <10 || precio >1000)){
        peso = parseInt(prompt("error.ingrese peso entre 10 y 1000 kgs"))
      }

      precio = parseInt(prompt("ingrese un peso mayor a cero"))
      while(isNaN(precio) || precio <= 0){
        precio = parseInt(prompt("error.ingrese un peso mayor a cero"))
      }

      validad = prompt("ingrese `v` si es vegetal, `a` si es animal o `m` si es mezcla")
      while(validad !== "v" && validad !== "a" && validad !== "m"){
        validad = prompt("error. ingrese `v` si es vegetal, `a` si es animal o `m` si es mezcla")
      }
      seguir = prompt("desea seguir ingresando s/n")

      //a) El importe total a pagar , bruto sin descuento y
      if(nohaypreciominimomaximo = true){
        acumuladorprecio = precio++
        importetotal += acumuladorprecio
        nohaypreciominimomaximo = false
      }

      //b) el importe total a pagar con descuento(solo si corresponde)
      if(precio >= 100 && precio <= 300){
        descuento15 = precio*0.85
      }
      else if(precio > 300){
        descuento25 = precio * 0.75
      }
      //d) Informar el tipo de alimento más caro.
      if(validad = "v" > validad == "a " && validad == "m"){
        alimentomascaro = "v"
      }
      else if(validad = "a" > validad == "v " && validad == "m"){
        alimentomascaro = "a"
      }
      else{
        alimentomascaro = "m"
      }

      //f) El promedio de precio por kilo en total.
      if(nohaypreciominimomaximo = true){
        acumuladorprecio += precio
        contadorprecio = precio++
        promedioprecio = acumuladorprecio / contadorprecio
      }


    } while(seguir =="s")
    
    document.write("El importe total a pagar , bruto sin descuento es " + importetotal + "<br>")

    document.write("el importe total a pagar con descuento es " + descuento15 + "y " + descuento25 + "<br>")

    document.write("el tipo de alimento más caro es " + alimentomascaro + "<br>")

    document.write("El promedio de precio por kilo en total es de " + promedioprecio + "<br>")





}
