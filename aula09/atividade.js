/* 01 - Objeto Pessoa
const pessoa = {
    nome: "Guilherme",
    idade: 21,
    profissao: "desenvolvedor",
    apresentar: function() {
        console.log(`Sou ${this.nome}, tenho ${this.idade} e sou ${this.profissao}.`);
    }
};

pessoa.apresentar();
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
        resultado = this.A + this.B + this.C;
        console.log(resultado);
    }
};

calculadora.soma();
*/

/* 04 - Classe Retângulo
function Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.calcularArea = function() {
     const area = this.altura * this.largura;
      console.log(`Área: ${area}`)
    };
}

const novoRetangulo = new Retangulo(10, 2);
novoRetangulo.calcularArea();
*/

/* 05 - Classe Conta Bancária
function ContaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;

    this.depositar = function(valor) {
        this.saldo += valor;
    }

    this.sacar = function(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

const objeto = new ContaBancaria("Guilherme", 1000);

objeto.depositar(500);
objeto.sacar(300);

console.log(objeto);
*/
