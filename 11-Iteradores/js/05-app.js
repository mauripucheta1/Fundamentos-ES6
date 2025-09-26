let j = 0;

do {

    if (j % 5 === 0 && j % 3 === 0) {
        console.log('FizzBuzz');
    } else if (j % 5 === 0) {
        console.log('Buzz');
    } else if (j % 3 === 0) {
        console.log('Fizz');
    };

    j++;

} while ( j <= 10);

// Aclaraciones: El Do-While a diferencia del While es que ejecuta algo por lo menos una vez y luego evalúa la condición