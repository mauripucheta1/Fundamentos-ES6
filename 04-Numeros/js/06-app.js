let numero1 = "20";
let numero2 = "20.2";
let numero3 = "Veinte";
let numero4 = 20;

// Pre-visualización de valores y tipo
console.log('Tipo de valor de Número 1:', typeof numero1, 'con valor:', numero1);
console.log('Tipo de valor de Número 2:', typeof numero2, 'con valor:', numero2);
console.log('Tipo de valor de Número 3:', typeof numero3, 'con valor:', numero3);
console.log('Tipo de valor de Número 4:', typeof numero4, 'con valor:', numero4);

// Conversiones
console.log('Conversión de Número 1:', Number.parseInt(numero1));
console.log('Conversión de Número 2:', Number.parseFloat(numero2));
console.log('Conversión de Número 3:', Number.parseInt(numero3));
console.log('Conversión de Número 4:', Number.parseFloat(numero4));

// Revisar si es entero o no
numero1 = Number.parseInt(numero1);
console.log('El Número 1, ¿es entero?', Number.isInteger(numero1));
console.log('El Número 2, ¿es entero?', Number.isInteger(numero2));