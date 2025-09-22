const saludos = ['Hola', 'Hello', 'Ciao', 'Hi', 'Bye', ['Que onda', 'Cómo te va', 'Cómo andas']];

// Podemos logear un array en forma de tabla
console.table(saludos);

// Acceso a un elemento del array
console.log('Acceso al segundo elemento del arreglo:', saludos[1]);
console.log('Acceso al primer elemento del arreglo:', saludos[0]);
console.log('Acceso al último elemento del arreglo:', saludos[4]);
console.log('Acceso al último elemento del arreglo y al elemento intermedio del mismo:', saludos[5][1]);

// Cuánto mide el array
console.log('El largo del array de saludos es:', saludos.length);

for (let i = 0; i < saludos.length; i++) {

    console.log('Saludo:', saludos[i]);

};