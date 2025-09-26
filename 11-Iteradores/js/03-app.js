// Ejercicio FizzBuzz
const numeros = [3, 5, 15, 6, 10, 30, 9, 20, 45, 12, 25, 60];

for (let f = 0; f < numeros.length; f++) {

    if (numeros[f] % 3 === 0 && numeros[f] % 5 === 0) {
        console.log('FizzBuzz');
    } else if (numeros[f] % 5 === 0) {
        console.log('Buzz');
    } else if (numeros[f] % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log('No es múltiplo ni de 3 ni de 5');
    };

};