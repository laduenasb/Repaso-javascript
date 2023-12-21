// EJEMPLO BASICO (relacion operadores y expresiones)

let temperatura = 28;
let esVerano = true; 

if (temperatura > 25 && esVerano) {
  console.log("Hace calor en verano");
} else {
  console.log("No hace tanto calor");
}

// EJERCICIO 1 
// Se requiere verificar si el usuario ha iniciado sesion y tiene permisos de administrador 

// Se declara y asigna un valor booleano a la variable 
let usuarioLogeado = true;
// Se declara y asigna un valor booleano a la variable  
let esAdmin = false; 

// Se evalua las condiciones en orden 
if (usuarioLogeado && esAdmin) {
  console.log("Bienvenido, administrador");
} else if (usuarioLogeado) {
  console.log("Bienvenido, usuario registrado");
} else {
  console.log("Inicia sesion para acceder");
}

