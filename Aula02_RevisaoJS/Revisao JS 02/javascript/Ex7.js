// script mudar texto com DOM//

// Crie um script em JS (no arquivoscript.js) que tenha uma função “mudaTexto()” => Muda    H1

function mudaTexto() {

    const tituloDoElemento = document.getElementById("titulo");

    //alterando o meu texto

    tituloDoElemento.innerText = "Este é um novo titulo"
    
}

const novoTexto = mudaTexto;