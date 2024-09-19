/* 01 - Objeto Pessoa
const pessoa = {
    nome: "Guilherme",
    idade: 21,
    profissao: "desenvolvedor",
    apresentar: function() {
        console.log(`Sou ${nome}, tenho ${idade} e sou ${profissao}.`);
    }
};

console.log(pessoa);
*/

/* 02 - Manipular Propriedades
const carro = {
    marca: "Fiat",
    modelo: "Uno Vivace",
    ano: 2012
};
carro.cor = "Vermelho";
carro.ano = 2022;

console.log(carro);
*/

/* 03 - Método de Soma de Valores
const calculadora = {
    A: 1,
    B: 2,
    C: 3,
    soma: function() {
        resultado = A + B + C;
        console.log(resultado);
    }
};

console.log(calculadora);
*/

/* 04 - Classe Retângulo
function retangulo (altura, largura) {
    this.altura = altura,
    this.largura = largura,
    calcularArea = function() {
        return this.altura * this.largura
    }
}
console.log(retangulo(10, 2));
*/

/* 05 - Classe Conta Bancária
function contaBancaria (titular, saldo) {
    this.titular = titular,
    this.saldo = saldo,
    depositar = function() {
        saldo += valor;
    }
    sacar = function() {
        if (saldo != 0){
            saldo -= valor;
        }
    }
}

const objeto = new contaBancaria("Guilherme", 1000)

console.log(objeto);
*/