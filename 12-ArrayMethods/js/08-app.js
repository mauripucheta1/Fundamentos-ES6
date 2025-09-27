const meses8 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito8 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Spread Operator
const meses81 = [...meses8, 'Agosto'];
console.log(meses81);

const producto = {

    nombre: 'Disco Duro',
    precio: 300

};

const carrito81 = [...carrito8, producto];
console.log(carrito81);

// Aclaraciones: El spread operator sirve para hacer copias de un array y no modificar el original, hay que tener cuidado de no utilizarlo sobre un objeto.