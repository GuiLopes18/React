/* Exercício 06 - Contagem
let idade = 21;
let contador = 1;

while(contador <= idade) {
    console.log(contador);
    contador++;
}
*/

/* Exercício 07 - Soma dos Números Pares
let num = 0;
let soma = 0;

while (num <= 100) {
    if (num % 2 === 0) {
        soma += num;
    }
    num++;
}
console.log(soma);
*/

/* Exercício 08 - Multiplicar por 2 até passar de 1000
let num = 1;

while (num <= 1000) {
    console.log(num);
    num *= 2;
}

console.log(num);
*/

/* Exercício 09 - Verificar se é primo
let num = 17;
let i = 2;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}
else if (num === 2) {
    isPrime = true;
}
else {
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
}

console.log(isPrime);
*/

/* Exercício 10 -  ímpares de 1 a 20
let num = 1;

while (num <= 20) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    else {
        num++;
    }
} 
*/