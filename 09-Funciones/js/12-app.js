const carrito = [

    {nombre: 'Monitor', precio: 100},
    {nombre: 'Mouse', precio: 200},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Auriculares', precio: 400},
    {nombre: 'Webcam', precio: 500},
    {nombre: 'Mousepad', precio: 600},

];

// Método .map con arrowFunction
const nuevoCarrito = carrito.map( producto => `El producto ${producto.nombre} tiene un precio de ${producto.precio}`);

// Función forEach loop
carrito.forEach( producto => console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}`));

console.log('nuevoCarrito:', nuevoCarrito);

// Aclaraciones: Lo que hicimos fue aplicar el método .map y loop forEach en un array de objetos para recorrerlos a través de arrow functions.