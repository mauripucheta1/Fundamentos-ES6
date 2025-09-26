for ( let c = 0; c <= 10; c++ ) {

    if (c % 2 === 0) {
        continue;
    } else {
        console.log('Salto emitido');
    };

};

// Aclaraciones: La instrucción "continue" sirve para omitir la instrucción y saltar al siguiente vuelta del búcle

for ( let d = 0; d <= 10; d++ ) {

    console.log('Número:', d);

    if (d === 7) {
        console.log(`Número causante del freno ${d}`);
        break;
    };

};

// Aclaraciones: La instrucción "break" sirve para frenar la ejecución del bucle si se cumple X condición

const carrito2 = [

    {nombre: 'Monitor HP', precio: 500},
    {nombre: 'Mouse Noga', precio: 200},
    {nombre: 'Teclado Noga', precio: 400},
    {nombre: 'Webcam UNNIC', precio: 350},
    {nombre: 'Mousepad', precio: 100},
    {nombre: 'Micrófono', precio: 80},

];

for ( let e = 0; e < carrito2.length; e++ ) {

    if (carrito2[e].precio === 200) {
        continue;
    } else {
        console.log('Producto:', carrito2[e]);
    };

    if (carrito2[e].nombre === 'Monitor HP') {
        console.log(`El producto ${carrito2[e].nombre} tiene un descuento del 15%`);
    };

    if (carrito2[e].precio > 370) {
        console.log(`El producto ${carrito2[e].nombre} tiene un descuento del 5%`);
    };

    if (carrito2[e].nombre === 'Webcam UNNIC') {
        break;
    };

};