const segundoCarrito = [];

// Definimos un producto
const producto3 = {

    nombre: 'Micrófono',
    precio: 100

};

// Definimos un segundo producto
const producto4 = {

    nombre: 'Mouse',
    precio: 50

};

// Definimos un tercer producto
const producto5 = {

    nombre: 'Mousepad',
    precio: 30

};

// Realizo una copia del carrito (segundo carrito) y le agrego el producto 3
let resultado = [...segundoCarrito, producto3];

// Realizo una copia del carrito (segundo carrito) ya con el producto 3 agregado y le agrego el producto 4 (al principio)
resultado = [producto4, ...resultado];

// Realizo una copia del carrito (segundo carrito) ya con el producto 4 agregado y le agrego el producto 5
resultado = [...resultado, producto5];

console.table(resultado);

/* Aclaraciones: Esta es una forma de programar con paradigma declarativo, debido a la utilización del Spread Operator (no se hace usos del array original, se realiza una copia y no se utilizan los métodos push ni unshift) Por otro lado, es importante tener en cuenta que dependiendo de donde agreguemos el Object Literal al arreglo copia (resultado) es la posición que va a tomar en el arreglo.
*/