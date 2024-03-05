// nome e cpf devem estar em um escopo global (var)

var CPF = '423.221.732-01'
var nome = 'Jayme'


// sobreNome deve estar dentro de uma função

function obterSobreNome () {
    let sobreNome = 'Holanda';
    return sobreNome
}

// A execução do programa deveimprimir o nome completo naordem correta (com quebra de linha):

const sobreNome = obterSobreNome ();

console.log ("Nome: ", nome)
console.log("Sobrenome:", sobreNome)
console.log("CPF:", CPF)


