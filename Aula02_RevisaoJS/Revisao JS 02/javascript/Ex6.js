//Escreva um programa que imprima os números de 1 a 100.
// Fizz no lugar do número multiplo de 3.
// Buzz no lugar do número multiplo de 5.
// FizzBuzz no lugar do número multiplo de 3 e 5.

// Loop para imprimir os números de 1 a 100

for (let i = 1; i <= 100; i++) {

    if (i % 3 ===0 && i % 5 ===0) {
        console.log('FizzBuzz')
    } else if (i % 3 ===0 ) {
        console.log('Fizz');
    } else if (i % 5 ===0 ) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
  
  }
  