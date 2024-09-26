/* 01 - Lista Múltiplos de 3
let numeros = [2, 3, 6, 9, 5];
let novaLista = [];

for (let i = 0; i < numeros.length; i++) {
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
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    console.log(soma/lista.length);
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

function apresentar(pessoa) {
    console.log(`Meu nome é ${pessoa.nome} e meu endereço é ${pessoa.endereco.rua}, Nº ${pessoa.endereco.numero}, ${pessoa.endereco.cidade} - ${pessoa.endereco.estado}`);
}

apresentar(pessoa);

*/
