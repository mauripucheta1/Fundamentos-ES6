// Definir un array vacío
const carrito = [];

// Definir un producto (Object Literal)
const producto = {

    nombre: 'Monitor 22"',
    precio: 500

};

// Definir un segundo producto (Object Literal)
const producto2 = {

    nombre: 'Teclado',
    precio: 200

};

// Agregar el producto (Object Literal) al final del array
carrito.push(producto);

// Agregar el segundo producto (Object Literal) al principio del array
carrito.unshift(producto2);

console.table(carrito);

// Aclaraciones: Esta es una forma de programar con paradigma imperativo, debido a los métodos push y unshift.