// Definición de constantes
const productoLargo = 'Producto a medir';
const productoCorto = 'Mouse';

// Método length
console.log('Largo de "productoLargo":', productoLargo.length);
console.log('Largo de "productoCorto"', productoCorto.length);

// Método indexOf
console.log('indexOf de "productoLargo":', productoLargo.indexOf('medir'));
console.log('indexOf de "productoCorto":', productoCorto.indexOf('Mouse'));

// Método includes
console.log('Incluye en "productoLargo":', productoLargo.includes('A'));
console.log('Incluye en "productoCorto":', productoCorto.includes('Mouse'));

// Aclaraciones: Estos son algunos métodos de Strings excepto "length" que es una propiedad, por eso no lleva ().