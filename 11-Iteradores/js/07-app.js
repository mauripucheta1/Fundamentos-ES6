const pendientes2 = ['Tarea', 'Comer', 'Entrenar', 'Estudiar'];

pendientes2.forEach( (pendiente, index) => console.log(`Índice: ${index}, Tarea pendiente: ${pendiente}`));

const carrito3 = [

    {nombre: 'Monitor HP', precio: 500},
    {nombre: 'Mouse Noga', precio: 200},
    {nombre: 'Teclado Noga', precio: 400},
    {nombre: 'Webcam UNNIC', precio: 350},
    {nombre: 'Mousepad', precio: 100},
    {nombre: 'Micrófono', precio: 80},

];

for (let pendiente of pendientes2 ) {

    console.log(`Tarea pendiente 2: ${pendiente}`);

};

for (let producto of carrito3) {

    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`);

};

/* Aclaraciones: El for of es una variante de For Loop pero con una sintaxis un poco más resumida, donde asigna cada elemento de un array a una variable, como si se tratara de una etiqueta. 
Es importante aclarar que for of itera sobre arreglos.
*/