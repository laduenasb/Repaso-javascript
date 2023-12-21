// OPERADORES DE ASIGNACIÓN 
// Estos de deben ejecutar en runcode (consola)

// Asignacion básica
let x = 5; 

// Asignacion con suma (+=)
  let y = 5;
  y += 3; // Es equivalente a y = y + 3;
  console.log(y);
  // Después de esta operación, y será igual a 8.


// Asignacion con resta (-=)
  let z = 7;
  z -= 2; // Es equivalente a z = z - 2;
  console.log(z);
  // Después de esta operación, z será igual a 5.


// Asignacion con multiplicación(*=)
  let a = 3;
  a *= 4; // Es equivalente a a = a * 4;
  console.log(a);
  // Después de esta operación, a será igual a 12.


// Asignacion con división (/=)
  let b = 20;
  b /= 5; // Es equivalente a b = b / 5;
  console.log(b);
  // Después de esta operación, b será igual a 4.


// Asignación con módulo (%=)
  let c = 17;
  c %= 4; // Es equivalente a c = c % 4;
  console.log(c);
  // Después de esta operación, c será igual a 1.

  

// OPERADORES DE CADENA
  let saludo = "!Hola, "; 
  let nombre = "Juan!";
  let mensaje = saludo + nombre; // Resultado esperado 
  console.log(mensaje);

// OPERADORES ARITMÉTICOS
  let num1 = 10; 
  let num2= 3; 
  let suma = num1 + num2; // Resultado esperado
  console.log("La suma es: "+suma);


// OPERADORES LÓGICOS
  let esMayorDeEdad = true; 
  let tieneLicencia = false; 

  if (esMayorDeEdad && tieneLicencia) {
    console.log("Puede conducir");
  } else {
    console.log("No puede conducir");
  }

// Ejemplo operadores lógicos combinados
  let edad2 = 25;
  let esEstudiante = true;

  // AND lógico
  let esAdultoYEstudiante = edad2 >= 18 && esEstudiante; // true
  console.log(esAdultoYEstudiante);

  // OR lógico
  let esAdultoOEstudiante = edad2 >= 18 || esEstudiante; // true
  console.log(esAdultoOEstudiante);

  // NOT lógico
  let noEsEstudiante = !esEstudiante; // false
  console.log(noEsEstudiante);



// OPERADORES DE COMPARACIÓN 
  let edad = 25; 

  if (edad > 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }

// Igualdad estricta y NO igualdad 
  let numero = "5";

  if (numero == 5) {
    console.log("Igual con doble igual"); // Esto se ejecutará
  }

  if (numero === 5) {
    console.log("Igual con triple igual"); // Esto no se ejecutará
  }