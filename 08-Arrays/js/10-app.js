const carrito4 = [

    {nombre: 'Monitor HP', precio: 500},
    {nombre: 'Mouse Noga', precio: 200},
    {nombre: 'Teclado Noga', precio: 400},
    {nombre: 'Webcam UNNIC', precio: 350},
    {nombre: 'Mousepad', precio: 100},
    {nombre: 'Micrófono', precio: 80},

];

// Iteramos con for each
carrito4.forEach( function(producto) {

    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`);

});

// Iteramos con map
const nuevoCarrito4 = carrito4.map( function(producto) {

    return `Producto: ${producto.nombre} Precio: ${producto.precio}`;

});

console.log('Nuevo carrito:', nuevoCarrito4);

// Aclaraciones: El método forEach y map realizan casi lo mismo, con la diferencia de que .map retorna un array permite asignar lo que retorne a una variable y forEach no retorna nada.