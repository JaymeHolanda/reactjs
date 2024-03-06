// Orientação a objetos

class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;

    }

        // criando o método de visualização exibirInfo()


    exibirInfor() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`);
    }
        
}

// Criei uma classe extra

class tosse extends Pessoa {
    tosse(){
        console.log("Coff, Coff!")
    }
}




// Criando um Objeto chamando João.
// No caso tosse herda todos as informações de Pessoa.

const joao = new tosse ("João", 32 , "Desenvolvedor");




// Chamando nosso método criado

joao.exibirInfor();
joao.tosse();





