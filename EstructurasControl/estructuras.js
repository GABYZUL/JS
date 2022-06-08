//ESTRUCTURA




// while(CONDICION){
//     codigo a ajecutar 
// }

//Imprimir numeros del 1 al 10

// var  num = 0;
// while(num<11){
//     console.log(num);
//     num++;
// }

//Revisaremos el usuario intruduce valores

// var arreglo = []
// var userInput= "";

// while(!(userInput == "")){
//     userInput = prompt("Ingresa un valor o caracter");
//     arreglo.push(userInput);
// }
// console.log('El usuario me dio estos valores'+ arreglo);


//CICLO DO WHILE
//Conteo de numeros 
// var contador = 1;
// do{
//     contador++; //Contador es igual a 1
//     console.log(contador);
// }while
//     (contador < 10)
// //Si dijer contador == 10 no lo ejecuta por que al llegar al 10 no lo reotorna por que no es 10



// Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
// Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

var num1 = 0;
var numeros= 0;
do{
    num1= prompt("Ingrese un numero cualquiera mayor a 5");
    console.log("Bien")
}
while ((num1++)*5 == num1);
numeros=num1; 

console.log("Estos son los numros ")

