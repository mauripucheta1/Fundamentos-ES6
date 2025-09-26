const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Esto funcionará para el array de meses
const resultado = meses.includes('Enero');
console.log(resultado);

// Esto funcionará para el array de carritos
const resultado2 = carrito.some( producto => {
    return producto.nombre === 'Celular'; 
});

console.log(resultado2);

// Aclaraciones: La diferencia entre includes y some, es que includes solamente sirve para arrays de índices mientras que some, sirve para arrays de índices y array de objetos.