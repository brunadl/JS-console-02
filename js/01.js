//estruturas de repetição

for (let i = 0; i <=20; i++) {
  console.log(i);
}


//sorteando valores
for (let i = 0; i <=9; i++) {
  //sorteia um número entre 0 e 1
  let numero = parseInt(Math.random()*100);
  console.log('Número sorteado: ' + numero);
}
console.log("------------------------------------");


//sorteando e somando valores
let totalSoma = 0;
for (let i = 0; i <=9; i++) {
  //sorteia um número entre 0 e 1
  let numero = parseInt(Math.random()*100);
  totalSoma+=numero;
  console.log('Número sorteado: ' + numero);
}
console.log('Total da somatória: ' + totalSoma);
console.log("------------------------------------");

//usando while - sortear apenas pares
//sorteando valores
for (let i = 0; i <=9; i++) {
  //sorteia um número entre 0 e 1
  let numero = parseInt(Math.random()*100);
  while (numero % 2 != 0) {
    numero = parseInt(Math.random()*100);
  }
  console.log('Número sorteado: ' + numero);
}
console.log("------------------------------------");

//do while

let x = 0;
do {
  console.log("Valor de x= " + x);
  x+=5;
} while (x <=100);
