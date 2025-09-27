const carrito4 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado4;

resultado4 = carrito4.filter(producto => producto.precio > 400);
console.log(resultado4);

resultado4 = carrito4.filter(producto => producto.precio < 350);
console.log(resultado4);

resultado4 = carrito4.filter(producto => producto.nombre !== 'Televisión' && producto.nombre !== 'Celular');
console.log(resultado4);

// Aclaraciones: El método filter me devuelve un nuevo array con los elementos (objetos en este caso) que cumplan X condición (precio mayor a 400 en este caso)