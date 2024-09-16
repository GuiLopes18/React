 /*Exercício 01 - Tabuada
let num = 7;

for(let i = 1; i <= 10; i++) {
    console.log(num * i)
}
*/

/* Exercício 02 - Soma dos Números
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);
*/

/* Exercício 03 - Números Pares
for(let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}
*/

/* Exercício 04 - Fatorial 
let num = 5;
let resultado = 1;

for(let i = 1; i <= num; i++) {
    resultado *= i;
}
console.log(`${num}! = ${resultado}`);
*/

/* Exercício 05 - Fibonacci
num1 = 0;
num2 = 1;

for (let i = 0; i < 16; i++) {
    if (i === 0) {
         console.log(num1);
    } 
    else if (i === 1) {
        console.log(num2);
    }
    else {
        let proximo = num1 + num2;
        console.log(proximo);

        num1 = num2;
        num2 = proximo;
    }
}
*/
