const carrito3 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Con un forEach
let total = 0;
carrito3.forEach(producto => total += producto.precio);

console.log('Total:', total);

// Con un reduce
let resultado3 = carrito3.reduce( (total, producto) => total + producto.precio, 0);
console.log('Resultado:', resultado3);

/* Aclaraciones: Podemos recorrer un array de objetos a través de un forEach y a través del método reduce. La diferencia entre ambos, es que el reduce, necesita de dos parámetros, el primero es el acumulador (total) y el segundo es el objeto completo en cuestión, donde al inicializar (total) arranca en 0 y por cada vuelta se le irá sumando la propiedad "precio" (valor de la llave precio inicializada en 0) a la variable acumuladora 0.
*/