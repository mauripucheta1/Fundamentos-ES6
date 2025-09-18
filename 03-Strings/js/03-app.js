const productoGancho = 'Monitor marca ';
const productoFinal = 'Samsung usado';

// Concatenación a través de método concat
console.log(productoGancho.concat(productoFinal));

// Concatenación a través de operador aritmético
console.log('El producto ' + productoGancho + productoFinal + ' fue vendido');

// Concatenación a través de comas
console.log('El producto', productoGancho, productoFinal, 'fue vendido');

// Concatenación a través de template strings
console.log(`El producto ${productoGancho}${productoFinal} fue vendido`);