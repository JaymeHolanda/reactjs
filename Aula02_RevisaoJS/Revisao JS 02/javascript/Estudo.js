//Exemplo de Arrays 

let meuArray = [1, 2 , 3, 4 ,5 ];

// Exemplo de funções

function somar (num1, num2) {

    return num1 + num2;

};

let resultado = somar(2,3);



// Exempo de Objetos Regulares

const objeto = {nome: 'joão', idade: 30};

// Exemplo de Objetos de Data

let minhaData = new Date ();

// Arrow Function

const some = (v1 , v2 ) => {v1+v2}

console.log (some (3,6))

// Push = Adiciona novos elementos na Array.  "array.pus(x);"

const array = ["Pedro", "João", "Paulo", "Gustavo"];

// Adicionando Alessandra
array.push("Alessandra");

// lenght (números de uma array)
//pop (remove o último)
// shift (remove o primeiro)
//unshift (adiciona um ou mais no inicio)

console.log(array)

//Primeiro da lista
console.log(array.length)


// objeto

let pessoa = {
    nome: 'joão',
    idade: 22,
    cidade: 'joão pessoa',

};

console.log (pessoa.nome, `, vindo da cidade de:`, pessoa.cidade);