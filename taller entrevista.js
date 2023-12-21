// Combina operadores para verificar si un año es bisiesto(divisible por 4 pero no por 100, a menos que también sea divisible por 400)

const anio=1932;

// Forma I

let bisiesto=false;
if(anio%4==0){
	bisiesto=true;
	if(anio%100==0){
		bisiesto=false;
		if(anio%400==0){
			bisiesto=true;
		}
	}
}
console.log(bisiesto? `${anio} es un año bisiesto.`:`${anio} no es un año bisiesto.`);

// Forma II

let bisiesto2 = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

if (bisiesto2) {
  console.log(`${anio} es un año bisiesto.`);
} else {
  console.log(`${anio} no es un año bisiesto.`);
}

/* Implementa una función en Javascript que tome una cadena como argumento y determine de manera recursiva si es un palíndromo. La función debe devolver true si la cadena es un palíndromo y false en caso contrario */

function palindromo(cadena){
	let cadenaSinEspacios="";
	let cadenaInvertidaSinEspacios="";
	let longitud=cadena.length;
	for(let i=0;i<longitud;i++){
		if(cadena.charAt(i)!=" "){
			cadenaSinEspacios+=cadena.charAt(i).toLowerCase();
		}
		if(cadena.charAt(longitud-1-i)!=" "){
			cadenaInvertidaSinEspacios+=cadena.charAt(longitud-1-i).toLowerCase();
		}
	}
	return cadenaSinEspacios==cadenaInvertidaSinEspacios;
}

//let cadena = "Anita lava la tina";


 let cadena = "A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá"
cadena=cadena.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
let esPalindromo=palindromo(cadena);

if(esPalindromo){
	console.log(`${cadena} es palindromo`);
} else{
	console.log(`${cadena} no es palindromo`);
}

