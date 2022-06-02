// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”
// var bello=prompt ("Te crees bello? ");

// // if(bello=="si" ){
// //     console.log("Ciertamente")
// // }
// // else{
// // console.log("No te creo")
// // }
// // 


//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm



// var  num1=prompt("Ingrese el numero para saber si es divisible entre dos");

// if(num1%2==0){
//     console.log("El numero si es divisible entre dos ")
// }
// else{
//     console.log("El numero no es divisuble entre dos")
// }

//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.




// var num2=prompt("Ingrese su numero: ");

// if(num2%2==0){
//     alert("Su numero es par")
// }else{
//     alert("Su numero es inpar")
// }


//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.


// var numG = prompt("Ingresa tu numero de la suerte: ");

// if(numG==1000){
//     alert("Felicidades has ganado!!")
// }else{
//     alert("Lo sentimos sigue participando")
// }


//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.



// var num3 = prompt("Ingresa el primer numero: ");
// var num4 = prompt("Ingresa el segundo numero: ");

// if(num3>num4){
//     alert("El numero " + num3 + " es el mayor")
// } if(num4>num3){
//     alert("El numero "+ num4 +" es el mayor")
// }
// else{
//     console.log("Los numeros son iguales")
// }


//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

// var num5 = prompt("Ingrese el primero numero: ");
// var num6 = prompt("Ingresa el segundo numero: ");
// var num7 = prompt("Ingresa el tercer numero: ");

// if(num5>num6){
//     if(num5>num7){
//         alert("El numero mayor es el numero "+ num5)
//     }
//     else{
//         alert("El numero mayor es el numero"+ num7)
//     }
// }
// else if(num6>num5){
//         if(num6>num7){
//             alert("El numero mayor es el numero "+num6)
//         }
//         else{
//             alert("El numero mayor es el: "+ num7)
//         }
//         }

// else {
//     alert("Los numeros son iguales")
//     }



//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// var dia = prompt("Ingrese un dia de la semana")

// if(dia=="Lunes" || dia=="LUNES" || dia=="lunes"){
//     alert("Es lunes");
// }else if(dia== "viernes" || dia=="Viernes"){
//     alert("Es viernes");
// }else if(dia=="Sabado" || dia=="sabado"){
//     alert("Es sabado")
// }else if(dia=="Domimgo" || dia=="domingo"){
//     alert("Es domingo")
// }else if(dia=="Martes" || dia=="martes" ||dia== "Miercoles" || dia=="miercoles"|| dia=="Jueves" || dia=="jueves"){
//     alert("Es cualquier dia")
// }else {
//     alert("Eso no es un dia de la semana")
// }

//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

// var cali=prompt("Ingresa una calificacion entre 1 y 10")
// if(cali>0 && cali<=10){
//     if(cali<6){
//         alert("Estas reprobado")
//     }
//     if(cali>=6 && cali<=8){
//         alert("Regular")
//     }
//     if(cali==9){
//         alert("Bien")
//     }
//     if(cali==10){
//         alert("Excelente")
//     }
// }
// else{
//     alert("Error-no esta en dentro del rango o es irreconocible")
// }


//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

// var helado = prompt("Ingrese el topping de helado que desea elegir")
// var or=10;
// var kit=15;
// var bro=20;
// var hel=50;


// if(helado== "oreo"){
//     console.log("El topping cuesta "+or+ "MXN en total serian "+(or+hel)+"MXN" );
// }
//   else if(helado=="kitkat"){
//         console.log("El topping cuesta "+kit+ "MXN en total serian "+(kit+hel)+"MXN");  
//     }
//     else if(helado=="brownie"){
//        var opción= prompt("No tenemos suficientes topping, desea un helado normal: ");
//         if(opción=="si"){
//             alert("Son 50MXN de un helado sin topping");
//         }
//         else{
//             alert("Que le vaya bien")
//         }
//         }
    
// else{
//     alert("Respuesta invalida")
// }



/*.
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN*/

// var eleccion = prompt("Ingresa la opcion que desees 1.Course 2.Carrera  3.Master")

// if(eleccion==1){
//     alert("Este programa cuesta $4999 MXN ")
//     console.log("Ejecutado con exito")
// } else if(eleccion==2){
//     alert("Este programa cuesta $3999 MXN")
// }else if(eleccion==2){
//     alert("Este programa cuesta $2999 MXN")
// }
// else{
//     alert("Este programa no esta disponible")
// }

