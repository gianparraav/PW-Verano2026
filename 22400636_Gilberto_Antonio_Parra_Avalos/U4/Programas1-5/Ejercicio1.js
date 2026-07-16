//Comparar 2 numeros aleatorios
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
console.log("Números generados:", num1, "y", num2 );

if (num1 === num2) {
  console.log("Los números son iguales");
} else if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else {
  console.log(`${num2} es mayor que ${num1}`);
}