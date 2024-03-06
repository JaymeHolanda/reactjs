numeros = [ 1, 2 , 3, 4 , 5];

function dobrarValores(numeros) {
    return numeros.map(function(numero) {
      return numero * 2;
    });
  }

const numerosDobrados = dobrarValores(numeros);

console.log(numerosDobrados);

//