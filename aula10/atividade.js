/* 01 - Lista Múltiplos de 3
let numeros = [2, 3, 6, 9, 5];
let novaLista = [];

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
        novaLista.push(numeros[i]);
    }
}

console.log(novaLista);
*/

/* 02 - Lista de Números Maiores que 5
let numeros = [1, 12, 43, 4, 57, 6, 3, 81, 99, 0];
let novaLista = [];

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] > 5) {
        novaLista.push(numeros[i]);
    }
}

console.log(novaLista);
*/

/* 03 - Lista da Soma dos Elementos das Posições Pares de uma Lista
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novaLista = [];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        novaLista.push(numeros[i]);
        soma += numeros[i];
    }
}

console.log(novaLista);
console.log(soma);
*/

/* 04 - Função Média Aritmética
function media(lista) {
    soma = 0;
    for (let i = 0; i <= lista.lenght; i++) {
        soma += lista[i];
    }
    console.log(soma/lista.lenght);
}

const lista = [3, 7, 9];
media(lista);
*/

/* 05 - Objeto Pessoa
const pessoa = {
    nome: "Guilherme",
    idade: 21,
    endereco: {
        rua: "Jasmim",
        numero: 1,
        cidade: "Brasília",
        estado: "DF"
    }
}

function apresentar(nome, endereco) {
    this.nome = nome;
    this.endereco = this.endereco; 
    console.log(`Meu nome é ${this.nome} e meu endereço é ${this.endereco}`)
}

apresentar(pessoa);
*/