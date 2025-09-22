let resultado;

// PI
resultado = Math.PI;
console.log('Número PI:', resultado);

// Redondeo (principios generales)
resultado = Math.round(2.8); 
console.log('A continuación redondeos con ROUND');
console.log('Redondeo de 2.8:', resultado);
resultado = Math.round(2.2);
console.log('Redondeo de 2.2:', resultado);
resultado = Math.round(2.5);
console.log('Redondeo de 2.5:', resultado);

// Redondeo hacia arriba
resultado = Math.ceil(2.1);
console.log('A continuación redondeos con CEIL');
console.log('Redondeo de 2.1:', resultado);
resultado = Math.ceil(3.2);
console.log('Redondeo de 2.3:', resultado);

// Redondeo hacia abajo
resultado = Math.floor(2.7);
console.log('A continuación redondeos con FLOOR');
console.log('Redondeo de 2.7:', resultado);
resultado = Math.floor(6.9);
console.log('Redondeo de 6.9:', resultado);

// Raíz cuadrada
resultado = Math.sqrt(180780);
console.log('Raíz de 180780', resultado);

// Valor absoluto
resultado = Math.abs(-480);
console.log('Valor absoluto de -480', resultado);

// Potencia
resultado = Math.pow(8, 3);
console.log('Resultado de 8 elevado al cubo', resultado);

// Mínimo
resultado = Math.min(1, 2, 3, 4, 5);
console.log('El mínimo del 1 al 5', resultado);

// Máximo
resultado = Math.max(1, 2, 3, 4, 5);
console.log('El máximo del 1 al 5', resultado);

// Aleatorio
resultado = Math.random() * 10;
console.log('Número aleatorio del 1 al 10', resultado);

// Aleatorio recomendado
resultado = Math.floor( Math.random() * 30 );
console.log('Número aleatorio del 1 al 30', resultado);

// Aclaraciones: En el método ROUND cuando es X.5 redondea hacia arriba.