const productoJueves = 'Brazo soporte doble monitor';

// Método para reemplazar valores (REPLACE)
console.log('Reemplazando "doble" por "triple":', productoJueves.replace('doble', 'triple'));
console.log('Reemplazando "Brazo" por "Soporte firme":', productoJueves.replace('Brazo', 'Soporte firme'));

// Método para cortar - extraer una parte de un string
console.log('Cortando una parte:', productoJueves.slice(0, 9)); // Inicio & fin
console.log('Cortando otra parte:', productoJueves.slice(6)); // De 5 en adelante
console.log('Cortando una parte:', productoJueves.slice(2, 1)); 

// Alternativa a slice
console.log('Cortando una parte:', productoJueves.substring(0, 9)); // Inicio & fin
console.log('Cortando una parte:', productoJueves.substring(2, 1)); 

// Aclaraciones: slice y substring son similares, con la diferencia de que substring si le intentamos empezar a cortar desde el caracter 2 y terminar en 1, lo que va a hacer substring es arrancar en el caracter 2 y cortar 1 caracter más nomás, mientras que, slice no funcionará.

// EXTRA: Para cortar la primer letra
const nombrePersonal = "Mauricio";
console.log('Inicial del nombre:', nombrePersonal.charAt());
