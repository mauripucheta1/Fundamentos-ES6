const carrito3 = [

    {nombre: 'Monitor HP', precio: 500},
    {nombre: 'Mouse Noga', precio: 200},
    {nombre: 'Teclado Noga', precio: 400},
    {nombre: 'Webcam UNNIC', precio: 350},
    {nombre: 'Mousepad', precio: 100},
    {nombre: 'Micrófono', precio: 80},

];

// Iteramos con for each
carrito3.forEach( function(producto) {

    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`);

});