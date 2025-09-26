for ( let i = 0; i <= 10; i++ ) {

    console.log(`Número: ${i}`);
    
};

for ( let a = 0; a <=10; a++) {

    if (a % 2 === 0) {
        console.log('Número par:', a);
    } else {
        console.log('Número impar:', a);
    };

};

const carrito = [

    {nombre: 'Monitor HP', precio: 500},
    {nombre: 'Mouse Noga', precio: 200},
    {nombre: 'Teclado Noga', precio: 400},
    {nombre: 'Webcam UNNIC', precio: 350},
    {nombre: 'Mousepad', precio: 100},
    {nombre: 'Micrófono', precio: 80},

];

for (let b = 0; b < carrito.length; b++) {

    console.log('Nombre del elemento:', carrito[b].nombre);

};


// Aclaraciones: Estamos en presencia de un Foor Loop que consta de tres partes, la primera es la inicialización del índice, la segunda es la condición y la tercera es el incrementador