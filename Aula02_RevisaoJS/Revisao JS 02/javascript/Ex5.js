const notas = [7, 6 , 6];

console.log (`Primeira nota do aluno é: ${notas[0]}`);
console.log (`Primeira nota do aluno é: ${notas[1]}`);
console.log (`Primeira nota do aluno é: ${notas[2]}`);
console.log (`Quantidade de notas observadas são: ${notas.length}`)

// usando o método reduce para somar todas as arrays

const media = notas.reduce((soma, nota) => soma + nota) / notas.length;

console.log(`A média das notas é: ${media}`);

if (media >= 7) {
    console.log('Parabéns !! Você passou !! ')
} else {
    console.log ('Quem sabe na prossima! Você reprovou! :( ')
}

// .