// Funcion que genera un numero aleatorio en el rango [min, max]
function aleatorio(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// EXPLICACION
  // Math.random() devuelve un numero decimal aleatorio entre 0 y 1
  // Math.floor redondea hacia abajo para obtener un numero entero


// Funcion que devuelva la eleccion correspondiente a un numero (1, 2 o 3)
function eleccion(jugada) {
  let resultado = ""
  if (jugada == 1) {
  resultado = "piedra"
} else if (jugada == 2) {
  resultado = "tijera"
} else if (jugada == 3) {
  resultado = "papel"
} else {
  resultado = "Sin eleccion"
}
return resultado

}


// Variables para almacenar las elecciones del jugador y del pc 
let jugador = 0
let pc = aleatorio(1,3)

// el jugador ingresa su eleccion mediante un prompt 
jugador = prompt("Elige 1 para piedra, 2 para tijera y 3 para papel")
// Se muestran las elecciones del jugador y la del pc mediante alert
alert("Tu eliges " + eleccion(jugador))
alert("El pc elige " + eleccion(pc))

// Comparacion de elecciones y determinacion del resultado 
if (jugador == pc) {
  alert("EMPATE!!")
} else if (jugador == 1 && pc == 2) {
  alert("GANASTE")
} else if (jugador == 2 && pc == 3) {
  alert("GANASTE")
} else if (jugador == 3 && pc == 1) {
  alert("GANASTE")
} else {
  alert("PERDISTE :( ")
}

