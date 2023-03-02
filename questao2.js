/* Questão 2: */

let numero = 34; //numero que vai ser verificado
let a = 0; 
let b = 1; 
let c = 0; 



while (c < numero) {
  c = a + b;
  a = b;
  b = c;
}

if (c === numero) {
  console.log(numero+ " numero dentro da sequência Fibonacci.");
} else {
  console.log(numero+ " numero fora da sequência Fibonacci.");
}



/* Questão 4 */

