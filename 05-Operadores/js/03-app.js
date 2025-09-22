let numeroUndefined;

console.log('Numero undefined:', numeroUndefined);

let numeroNull = null;
console.log('Numero null:', numeroNull);

// La connotación de ECMA dice que null debe ser un object
console.log('numeroUndefined:', typeof numeroUndefined);

// Comparación entre ambos
console.log('Comparación entre null y undefined:', numeroUndefined === numeroNull);