// EJERCICIO 2 
// Escribe un programa que determine si un numero ingresado por el usuario es +, - o es igual a cero

const numero = parseFloat(prompt("ingrese un número")); 

if (numero > 0) {
  alert("El número ingresado es positivo")
} else if (numero < 0) {
  alert ("El numero ingresado es negativo")
} else {
  alert ("el numero es igual a 0")
} 


// Crear un programa que calcule el precio de un producto con un descuento del 10% si el precio original es mayor o igual a $100 USD

// Solicita al usuario que ingrese el precio original del producto y lo convierte a un número de punto flotante (float)

const precioOriginal = parseFloat(prompt("Ingresa el precio original del producto")); 

// Declaracion de la variable para almacenar el precio final 
let precioFinal; 
// 
if (precioOriginal >= 100) {
  precioFinal = precioOriginal - (precioOriginal * 0.1);
} else {
  precioFinal = precioOriginal
}

// Mostrar el mensaje con el precio final 
alert(`El precio final es: $ ${precioFinal.toFixed(2)} USD `)




// Crear un programa que pida al usuario su edad y le dig si es un niño (menor de 12), adolecente (entre 13 y 17), adulto (18 y 64), o adulto mayor (64 años o mas)

const edad = parseInt(prompt("Ingresa tu edad: ")); 

if (edad < 12) {
  alert("Eres un niño")
} else if (edad >= 12 && edad <= 17) {
  alert("Eres un adolescente")
} else if (edad >= 18 && edad <= 64) {
  alert("Eres una persona adulta, lo siento")
} else {
  alert("Eres un adulto mayor")
}


