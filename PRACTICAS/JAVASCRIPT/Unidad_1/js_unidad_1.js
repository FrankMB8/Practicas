/*Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.*/

// mensaje = "hola mundo";
// alert(mensaje)

/*Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).
 */
/*mensaje = "hola mundo";
document.write(mensaje);*/

/*Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”*/

/*nombre = prompt("Ingresa tu nombre: ");
document.write("Hola " , nombre);*/

/*Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números. */

/*num1 = parseFloat(prompt("Ingresa el numero1 :" ));
num2 = parseFloat(prompt("Ingresa el numero2 :" ));
document.write("La suma de los numeros es: ", num1+num2);*/

/*Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor*/

/*num1 = parseFloat(prompt("Ingresa el numero1 :" ));
num2 = parseFloat(prompt("Ingresa el numero2 :" ));
if (num1 >= num2) {
    document.write("El número mayor es: ", num1 );
} else{
    document.write("El número mayor es: ", num2 );
}*/

/*POR RESOLVER Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.*/
/*

num1 = parseFloat(prompt("Ingresa el numero1:"));
num2 = parseFloat(prompt("Ingresa el numero2:"));
num3 = parseFloat(prompt("Ingresa el numero3:"));

if (num1> num2 &&num1>num3) {
    console.log("El numero mayor es: ", num1)
    }else if (num2> num3 && num2>num1) {
        console.log("El numero mayor es: ", num2) 
    }else if(num3> num1 && num3>num2) {
        console.log("El numero mayor es: ", num3) 
    }else{
        console.log("No soy un numero");
    }

*/
/*8. Escribe un programa que pida un número y diga si es divisible por 2 */

/*
let numero = parseFloat(prompt("Ingresa un numero: "));
    if(numero % 2 == 0){
        console.log("SI ES DIVISIBLE ENTRE 2");        
    }else{
        console.log("NO ES DIVISIBLE");        
    }
*/

/*9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a*/
/*
var frase = prompt("Ingrese una frase: ");

var fraseminuscula = frase.toLowerCase();

var contador = 0;

for(var i=0; i<fraseminuscula.length; i++){
    if (fraseminuscula.charAt(i) === 'a') {
        contador++;
    }
}

console.log("La letra (a) está", contador, "Veces");
*/
///Escribe un programa que pida una frase y escriba las vocales que aparecen
/*

console.log("Las vocales encontradas son: " + vocales);
*/

/*Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales*/

/*
var frase = prompt("Ingresa una frase: ");
var vocales = [];
var fraseminuscula =frase.toLowerCase();
var contador= 0;

for (i=0; i<fraseminuscula.length;i++){
    
    var caracter = fraseminuscula.charAt(i);
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contador++;
    } 
}
console.log("La frase es: ", frase);
console.log("En la frase hay", contador, "vocales");
*/


//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
/*
function contarVocales() {
    var frase = prompt("Ingresa una frase:");
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
  
    for (var i = 0; i < frase.length; i++) {
      var caracter = frase.charAt(i).toLowerCase();
  
      switch (caracter) {
        case "a":
          contadorA++;
          break;
        case "e":
          contadorE++;
          break;
        case "i":
          contadorI++;
          break;
        case "o":
          contadorO++;
          break;
        case "u":
          contadorU++;
          break;
        default:
          break;
      }
    }
  
    console.log("Cantidad de 'a': " + contadorA);
    console.log("Cantidad de 'e': " + contadorE);
    console.log("Cantidad de 'i': " + contadorI);
    console.log("Cantidad de 'o': " + contadorO);
    console.log("Cantidad de 'u': " + contadorU);
  }
  
  contarVocales();
*/
//13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
//7 (sólo hay que comprobar si lo es por uno de los cuatro)

/*
var numero = parseFloat(prompt("Ingrese un numero: "));

if (numero % 2 == 0) {
    console.log("Se divide entre 2");
}else if (numero % 3 == 0) {
  console.log("Se divide entre 3");
  
}else if (numero % 5 == 0) {
  console.log("Es divisible entre 5");
} else{
  alert("ERROR");
}
*/

// Elaborar un ciclo while para que recorra todas las condiciones mientras el numero sea mayor a cero
var numero = parseFloat(prompt("Ingrese un numero: "));

while (numero > 0) {
  if (numero % 2 == 0) {
    console.log("Se divide entre 2");
}else if (numero % 3 == 0) {
  console.log("Se divide entre 3");
  
}else if (numero % 5 == 0) {
  console.log("Es divisible entre 5");
} else{
  alert("ERROR");
}
break;
}


