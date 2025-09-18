const mensajeLargo = '           Hola            ';

// Calcular largo
console.log('Largo de "mensajeLargo": ', mensajeLargo.length);

// Suprimir espacio del principio
console.log('Resultado sin espacios al principio:', mensajeLargo.trimStart());

// Suprimir espacio del final
console.log('Resultado sin espacios al final:', mensajeLargo.trimEnd());

// Concatenación de métodos
console.log('Resultado sin espacios:', mensajeLargo.trimStart().trimEnd());

// Extra: Eliminación de espacios en ambas direcciones
console.log('Resultado sin espacios (2):', mensajeLargo.trim());