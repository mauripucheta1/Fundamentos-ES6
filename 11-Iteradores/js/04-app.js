let g = 0;

while (g <= 10) {

    console.log(`Número: ${g}`);
    g++;

};

// Ejercicio FizzBuzz 2
while (g <= 100) {

    if (g % 5 === 0 && g % 3 === 0) {
        console.log('FizzBuzz');
    } else if (g % 5 === 0) {
        console.log('Buzz');
    } else if (g % 3 === 0) {
        console.log('Fizz');
    };

    g++;

};

// Aclaraciones: La estructura while (mientras) sirve para ejecutar algo entorno a X condición, es decir, se ejecute lo que está dentro del bucle mientras se cumpla X condición.