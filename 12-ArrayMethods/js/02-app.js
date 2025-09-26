const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Método 1 para encontrar el índice
meses2.forEach((mes, index) => {
    
    if (mes === 'Abril') {
        console.log(`El mes ${mes} ha sido encontrado en el índice: ${index}`);
    };

});

// Método 2 para encontrar el índice
const indice = meses2.findIndex(mes => mes === 'Abril');
console.log('El índice de Abril es:', indice);

// Método 1 para encontrar el índice (en un array de objetos)
const indice2 = carrito2.findIndex(producto => producto.precio === 100);
console.log(indice2);

// Aclaraciones: El método findIndex lo que hace es buscar el valor del índice acorde a X condición. Nos retorna eso (arrowFunction).
// OJO: Solamente encontrará el primer coincidente, si existen varios, tendremos que utilizar filter por ejemplo.