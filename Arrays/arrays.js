//ARRAYS

//Coleccion ordenada de datos, se emplea paraalmacenar multiples
//valores de una sola variable

//SINTAXIS
var nombredelArray = [];

//Acceder a los lementos de un array

// var nombredelArray= [/*Posicion del elementos d3el 0-...*/];

//EJEMPLO
 var colores=['negro','amarillo','azul','Verde'];

//  console.log(colores[2])
//  console.log(colores)
//  colores[4]=[5,6,7,8,]
//  console.log(colores)


 //Modificar un elemento de un array

//  colores[2]='Cambie color o valor de la varible';
//  console.log(colores[2])


 //METODOA DE LOS ARRAYS

 //1.LENGTH
 //Nos devuelve el Numero total de los elementos de un arreglao
 //(N)

//  console.log(colores.length)

 //2.PUSH
 //Agrega un elemento al final de la lista


//  console.log(colores)
//  colores.push("morado")
//  console.log(colores)




 //3.POP
 //Elimina el ultimo elemento
//  console.log(colores)
//  colores.pop()
//  console.log(colores)

 //4.UNSHIFT 
 //Agrega un elemento al inicio 
//  colores.unshift('rosa')
//  console.log(colores)


//  //5.SHIFT 
//  //Elimina al de principio de la lista

//  colores.shift()
//  console.log(colores);


//6.SPLIT
//Divide o separa el arreglo de string dependiendo el valor quele indiques
//  var alumnos = 'Gabi  Diana  Cristobal Jose'
  
//  var arrayAlumnos=alumnos.split('D')
//  console.log(arrayAlumnos)

 //Lo puede separarpero elemina ese elemento 


 //7.SLICE
 //Quita una parte de la cadena y devuelve a otra

//  var colores=['negro','amarillo','azul','Verde'];

//  console.log(colores)
// // var quitarEle= colores.slice(2)
// var quitarEle= colores.slice(3)
//  console.log(colores)
//  console.log(quitarEle)


//  //8.ESPLICE
 //Sirve para agregar  y borrar elementos de un arreglo

 //Sintaxis 
 //nombreArray.splice(indice, numero de ele a elminar, elementos o elimnados)


//Agregando elementos (SUSTITUYENDO)
// console.log(colores)
// console.log(colores.splice(0,2,'Blue','Mexico',))
// console.log(colores)
// Borrando elementos
// console.log(colores)
// console.log(colores.splice(1))
// console.log(colores)

//Borrando un element y agregando uno

// console.log(colores)
// console.log(colores.splice(1,2,'rosa'))
// console.log(colores) 
//Los primero numero se borraran, el lugar rosa lo ocupa el ultimo numeri que borraste.



//9.SORT

//Ordena la lista de forma ascendente (A-Z) por defecto

// var verduras= ['Cebolla','Brocoli','Papas','Pepino']
// console.log(verduras);
// verduras.sort();
// console.log(verduras);

// var numeros = [5,14,7,25,47,120];

//Se ordenan los numeros de mayor a menos
// console.log(numeros);
// numeros.sort();
// console.log(numeros);

//Si queremos ordenarlo debemos meter una funcion
// console.log(numeros);
// numeros.sort(function(a,b){
//     return a-b});
// console.log(numeros);

//Ordena numero de mayor  menor tambien
// console.log(numeros);
// numeros.sort(function(a,b){
//     return a-b});
//     //Recibe 5, 14 -> Retornara 5-14= 19 por lo tanto mi ele a se situara en un indice menor que b
// //14, 7 -> 7-14= -7
//     console.log(numeros);

    //Cuando ordenamos strings con mayusculas y minusculas
    // var alumnos =['Diana','daniel','Zuber','zuly','Abel']
    // console.log(alumnos);
    // alumnos.sort(function(a,b){
    //     if(a.toLowerCase() < b.toLowerCase())
    //     return -1
    //     if(a.toLowerCase()> b.toLowerCase()) return 1

    //     return 0
    // });
    // console.log(alumnos);



    //10.REVERSE
    //Coloca los elementos del arreglo alreves
//  console.log(verduras);
//  verduras.reverse();
//  console.log(verduras);

    //11.CONCAT

    //Une el arreglo de dos arreglos
    //devuelve uno nuevo
    //  var paises = ['Mexico','Rusia','EU']
    //  var platillos =['Pozole','Comida','EUU']

    //  var unionArray= paises.concat(platillos)

    //  console.log(unionArray);

    //EJERCICIO EN CLASE 
//   Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// Ana, Oswaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)		
// Imprime la clasificación actual
// El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:		
// 1- Celia adelanta a Raúl		
// 2- Antonio es descalificado y se elimina del concurso
// 3- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// 4- Hay una nueva participante que pasa a encabezar la clasificación: Marta	
// 5- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

var clasificaciones= ['Ana','Oswaldo','Raúl','Celia','María','Antonio'];
console.log(clasificaciones);

clasificaciones [2]='Celia';
clasificaciones[3]='Raúl';
console.log(clasificaciones);
clasificaciones.pop();
console.log(clasificaciones);
clasificaciones.splice(1,0,"Roberto","Amaya");
console.log(clasificaciones);
clasificaciones.splice(0,0,"Marta");

















