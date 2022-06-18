// //PARA CREAR Y UTILIZAR UNA FUNCION
// //Declarar mi funcion 
// //Establecer los oarametros demi funcion
// //Dentro de las {} vamos a ponder el codigo a ejecutar de mi funcion

// function resta (numero1,numero2) {
//     var resta = parseInt(numero1) - parseInt(numero2); //PARSeINT Es para indicar que la variable va a guardar un INT 
//     alert('La resta es: ' + resta);
//   }
//   //  Solicitar 2 numeros al usuario
//   // var inputUsuario1 = prompt("Ingrese el primer numero")
//   // var inputUsuario2 = prompt("Ingrese el segundo numero")
  
//   //Gurdamos el resultado de la funcion resta en la variable resultado
//   // var resultado = resta(inputUsuario1,inputUsuario2)
  
//   // console.log(resultado)
  
//   function ObtenerMarcador (num1) {
//     var partido1 = 3;
//     var partido2 = 3;
  
//     function Agregar () {
//       var nombre = "Juanito";
//       return nombre + " anoto " + (partido1 + partido2) + " goles";
//     }
  
//     return Agregar ()
    
//   } 
  
//   // console.log(ObtenerMarcador())
  
//   // Funciones Puras
//   // Las funciones puras son aquellas que no tienen efecto secundario
  
//   function suma1Numero (numero) {
//     return numero + 1;
//   }
//   // console.log(suma1Numero(5.5)) // 6
  
//   // Funcion Impura
//   // Las funciones impuras son aquellas que tienen efecto secundario
//   function sumaNumeroRandom (numero) {
//     return numero + Math.random();
//   }
  // console.log(sumaNumeroRandom(5.5))
  
  //SCOPE
  // Scope es el alcance de las variables
  
  //Scope Global
  function semaforo (){

    function red(){
        document.write('<img src="https://previews.123rf.com/images/tilo/tilo1110/tilo111000004/10775396-sem%C3%A1foro-en-rojo.jpg"></img>');
        setTimeout(green, 2000)
        
}
function yellow(){
    document.write('<img src="https://png.vector.me/files/images/1/6/167685/traffic_light_yellow_clip_art.jpg"></img>');
        setTimeout(red, 2000)
        
}
function green(){
    document.write('<img src="https://as2.ftcdn.net/v2/jpg/00/58/61/67/1000_F_58616709_D9GczJ3vLLX5m7Rjxnq8GmiFU2Zxb41f.jpg"></img>');
    setTimeout(yellow, 2000)
}
return red();
}
semaforo();