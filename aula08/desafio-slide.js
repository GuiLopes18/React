let notasAluno = [8.5, 7.0, 6.3, 8.4];

let soma = 0;
for (let i = 0; i < notasAluno.length; i++) {
    soma += notasAluno[i];
}

let media = soma / notasAluno.length;
console.log(`A média das notas é: ${media.toFixed(2)}`);
