const carrito5 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado5;

// Método forEach
carrito5.forEach((producto, indice) => {

    if (producto.nombre === 'Tablet') {
        resultado5 = carrito5[indice];
    };

});

console.log(resultado5);

// Método find
const resultado51 = carrito5.find(producto => producto.nombre === 'Tablet');
console.log(resultado51);

// Aclaraciones: El método find busca un elemento en un array que cumpla X condición y lo asigna a una let/const. Importante: Asigna el primer resultado coincidente