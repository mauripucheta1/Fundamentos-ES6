const carrito6 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado6 = carrito6.every(producto => producto.precio < 1000);
console.log(resultado6);

// Aclaraciones: El método every sirve para verificar que todos los elementos de un array cumplan con X condición, retornando true o false.