// Arrays /// 


const notas = [10, 8 , 9];

console.log (`Primeira nota do aluno é: ${notas[0]}`);
console.log (`Segunda  nota do aluno é: ${notas[1]}`);
console.log (`Terceira nota do aluno é: ${notas[2]}`);
console.log (`Quantidade de notas observadas são: ${notas.length}`)

// usando o método reduce para somar todas as arrays

const media = notas.reduce((soma, nota) => soma + nota) / notas.length;

console.log(`A média das notas é: ${media}`);
