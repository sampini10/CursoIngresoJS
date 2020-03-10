
function mostrar()
{  
	/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.
	Se debe Informar al usuario lo siguiente:
	a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
	b) Del ítem con más unidades, el fabricante
	c) Cuántas unidades de jabones hay en total*/

	var tipo;
	var precio = 0
	var cantidadunidades = 0
	var marca;
	var fabricante;
	var nohayminimomaximo = true
	var barbijomascaro
	var acumuladorunidades
	var contadorunidades
	var contadorjabones
	var mayorfabricante
	var mayortipo

	for(var productos = 0 ; productos < 5 ; productos++)
	{
		tipo = prompt("ingrese si se protege con barbijo, jabon o alcohol")
		while(tipo == "barbijo" && tipo == "jabon" && tipo == "alcohol"){
			tipo = prompt("error, ingrese si se protege con barbijo, jabon o alcohol")
		}
		
		precio = parseInt(prompt("ingrese precio entre 100 y 300"))
		while(isNaN(precio) && precio <= 100 && precio >=300){
			precio = parseInt(prompt("error.ingrese precio entre 100 y 300")) 
		}

		cantidadunidades = parseInt(prompt("ingrese unidades entre 1 y 1000"))
		while(isNaN(cantidadunidades) && cantidadunidades< 0 && cantidadunidades >1000){
			cantidadunidades = parseInt(prompt("error.ingrese unidades entre 1 y 1000"))
		}

		marca = prompt("ingrese marca");

		fabricante = prompt("ingrese fabricante")

		//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
		if(nohayminimomaximo = true){
			barbijomascaro += tipo
			barbijomascaro = cantidadunidades
			mayorfabricante = tipo++
			nohayminimomaximo = false

			
		}
		//b) Del ítem con más unidades, el fabricante
		if(nohayminimomaximo = true){
		contadorunidades = acumuladorunidades++
		contadorunidades = fabricante
		nohayminimomaximo = false
		}

		//c) Cuántas unidades de jabones hay en total
		if(tipo == "jabon"){
			contadorjabones = jabon++
		}
		if(tipo == "jabon" > tipo == "barbijo" && tipo == "alcohol"){
			mayortipo = "jabon"
		}
		else if(tipo == "barbijo" > tipo == "jabon" && tipo == "alcohol"){
			mayortipo = "barbijo"
		}
		else{
			mayortipo = "alcohol"
		}





	}

	
	
	
	document.write("del mas caro de los barbijos, la cantidad de unidades es de " + barbijomascaro + "y el fabricante es " + mayorfabricante + "<br>")

	document.white("del item con mas unidades, el fabricante es " + contadorunidades + "<br>")

	document.write("total de unidades de jabon : " + contadorjabones + "<br>")

	
	
	
	
}
