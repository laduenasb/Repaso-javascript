let cadena = "Alejandro";
/*
if(cadena.length >5 && cadena[cadena.length-1] === "a") {
    console.log("Su último carácter  es la letra: a");
} else {
    console.log("Su último carácter no es la letra: a");
}*/

let longitud=cadena.length;
console.log((longitud>5 && cadena.charAt(longitud-1)) ? "Su última carácter es la letra: a" : "Su último carácter no es la letra: a");