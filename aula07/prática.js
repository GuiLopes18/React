/* Exercício 01 - Tabuada
num = 7;


for(let i = 1; i < 11; i++) {
    console.log(num * i)
}
*/
/* Exercício 02 - Soma dos Números
soma = 0;

for (let i = 1; i < 101; i++) {
    soma += i;
}
console.log(soma);
*/
/* Exercício 03 - Números Pares
for(let i = 0; i < 51; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}
*/
/* Exercício 04 - Fatorial 
num = 5;

for(let i = 0; i < num; i++) {
    num = num * (num - i);
}
console.log(num);
*/
/* Exercício 05 - Fibonacci
num = 0;

for (let i = 0; i < 16; i++) {
    if (num === 0 || num === 1) {
         console.log(num);
    }
    else {
        num = (num - 1) + (num - 2);
        console.log(num);
    }
}
*/
/* Exercício 06 - Contagem
idade = 21;

while(1 <= idade) {
    console.log(idade);
    idade = idade - 1;
}
*/
/* Atividade Funções
function calculadora(num1, num2, operacao) {
    if (operacao === "+") {
        console.log(num1 + num2);
    } else if (operacao === "-") {
        console.log(num1 - num2);
    }
    else if (operacao === "*") {
        console.log(num1 * num2);
    } else if (operacao === "/") {
        console.log(num1 / num2);
    }
}

calculadora(5, 3, "+");
calculadora(10, 2, "/");
*/
/*
function converterTemperatura(valor, tipo) {
    if (tipo === "C") {
        console.log(`${valor * 1.8 + 32} (conversão para Fahrenheit)`);
    } else if (tipo === "F") {
        console.log(`${(valor - 32) / 1.8} (conversão para Celsius)`);
    }
}

converterTemperatura(32, "C");
converterTemperatura(100, "F");
*/