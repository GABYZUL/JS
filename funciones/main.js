//PARA CREAR Y UTILIZAR UNA FUNCION
//Declarar mi funcion 
//Establecer los oarametros demi funcion
//Dentro de las {} vamos a ponder el codigo a ejecutar de mi funcion

function resta (numero1,numero2) {
    var resta = parseInt(numero1) - parseInt(numero2);
    alert('La resta es: ' + resta);
  }
  //  Solicitar 2 numeros al usuario
  // var inputUsuario1 = prompt("Ingrese el primer numero")
  // var inputUsuario2 = prompt("Ingrese el segundo numero")
  
  //Gurdamos el resultado de la funcion resta en la variable resultado
  // var resultado = resta(inputUsuario1,inputUsuario2)
  
  // console.log(resultado)
  
  function ObtenerMarcador (num1) {
    var partido1 = 3;
    var partido2 = 3;
  
    function Agregar () {
      var nombre = "Juanito";
      return nombre + " anoto " + (partido1 + partido2) + " goles";
    }
  
    return Agregar ()
    
  } 
  
  // console.log(ObtenerMarcador())
  
  // Funciones Puras
  // Las funciones puras son aquellas que no tienen efecto secundario
  
  function suma1Numero (numero) {
    return numero + 1;
  }
  // console.log(suma1Numero(5.5)) // 6
  
  // Funcion Impura
  // Las funciones impuras son aquellas que tienen efecto secundario
  function sumaNumeroRandom (numero) {
    return numero + Math.random();
  }
  // console.log(sumaNumeroRandom(5.5))
  
  //SCOPE
  // Scope es el alcance de las variables
  
  //Scope Global