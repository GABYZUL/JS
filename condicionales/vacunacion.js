var edad = 28;
var fronterizo = false;
var embarazada = true;
var semanasEmbarazo = 9;

if(edad>=18 && fronterizo == true){
    console.log("Si puedes vacunarte, por ser mayor del 18 años y vivir en un municipio fronterizo")
}else if(embarazada==true && semanasEmbarazo >=9 && edad>=18){
    console.log("Si te puedes vacunar por ser embarazada mayor de 18 años y con mas de 9 semans de gestacion")
}else if(edad>=30){
    console.log("Si te puedes vacunar por que eres mayor de 30")
}
else{
    console.log("No te puedes vacunar")
}