let numero= Math.floor(Math.random() * (100)+1);
let contador=0;
let opcion;
do{
opcion=parseInt(prompt("Digite un numero entre 1 y 100"));
if(opcion>numero){
console.log("Mas pequeño")
}else if(opcion<numero){
console.log("Mas grande")
}else if(numero==opcion){
console.log("Felicidades le atinaste")
}
contador++;
}while(numero!=opcion && contador<7);
if(numero!=opcion){
    console.log("Se te acabaron los intentos");
}
