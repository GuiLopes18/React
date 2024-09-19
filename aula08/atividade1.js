/* 01 - Soma
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma+= numeros[i];
}

console.log(soma);
*/

/* 02 - Maior Elemento
let numeros = [33, 95, 74, 69, 7];
maiorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);
*/

/* 03 - Ocorrência
let numeros = [0, 1, 0, 2, 3, 4, 5, 6, 0, 0, 7, 8, 9, 0, 10];
let alvo = 0;
let ocorrencias = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === alvo) {
        ocorrencias++;
    }
}

console.log(`O valor ${alvo} apareceu ${ocorrencias} vezes.`);
*/

/* 04 - Produto
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplicar = 9;

for (let i = 0; i < numeros.length; i++) {
    numeros[i] *= multiplicar 
}

console.log(numeros);
*/

/* 05 - Números Pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}
*/