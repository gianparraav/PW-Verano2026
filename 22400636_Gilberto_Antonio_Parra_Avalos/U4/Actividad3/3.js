//hasta que ambos lados tenga el mismo valor

let num1;
let num2;
let contador=0;
do{
    contador++
num1 = Math.floor(Math.random() * 100);
num2 = Math.floor(Math.random() * 100);
}while(num1!=num2);
console.log("Se ocuparon "+contador+ "lanzamientos");