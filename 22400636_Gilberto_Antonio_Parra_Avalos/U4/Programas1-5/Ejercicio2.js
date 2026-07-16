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