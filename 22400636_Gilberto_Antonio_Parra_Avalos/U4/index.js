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
//Generar números entre 0 y 5 hasta que salga 0
let num;
do {
  num = Math.floor(Math.random() * 6);
  console.log(num);
} while (num !== 0);
//Tabla de multiplicar de un número aleatorio entre 2 y 10
let n = Math.floor(Math.random() * 9) + 2;
console.log(`Tabla del ${n}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
//Contar pares e impares entre 10 números
let pares = 0, impares = 0;
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  console.log(num);
  if (num % 2 === 0) pares++;
  else impares++;
}
console.log(`Pares: ${pares}, Impares: ${impares}`);
//codigo
edad=17;
const mensaje=edad>=18? "Mayor de edad":"Menor de edad"
console.log(mensaje)