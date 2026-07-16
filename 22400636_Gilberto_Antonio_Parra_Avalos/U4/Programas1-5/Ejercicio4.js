//Contar pares e impares entre 10 números
let pares = 0, impares = 0;
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  console.log(num);
  if (num % 2 === 0) pares++;
  else impares++;
}
console.log(`Pares: ${pares}, Impares: ${impares}`);