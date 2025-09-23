const numeros2 = [10, 20, 30, 40, 50];
console.log('Array de números 2', numeros2);

// Destructuring de arrays (si quiero acceder al primer valor)
const [ primero ] = numeros2;
console.log('Primer número:', primero);

// Ahora, para acceder al tercer valor, tengo que ir desestructurando hasta llegar a ese valor
const [ , , tercero ] = numeros2;
console.log('Tercer número:', tercero);

// Ahora, podemos acceder hasta X valor y llegado ese valor, el resto podemos ponerlo en otro array
const [ primero2, segundo, ...tercero2 ] = numeros2;
console.log('Array final:', tercero2);