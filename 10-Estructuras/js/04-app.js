const dinero2 = 500;
const totalAPagar2 = 500;
const totalAPagar3 = 430;

// Comparador junto con else if
if (dinero2 > totalAPagar2) {
    console.log('Compra realizada');
} else if (dinero2 === totalAPagar2 ) {
    console.log('Compra justa');
} else {
    console.log('Compra rechazada');
};

// Comparador mayor o igual que
if (dinero2 >= totalAPagar2) {
    console.log('Compra realizada');
} else {
    console.log('Compra rechazada');
};

// Comparador junto con else if
if (dinero2 < totalAPagar2) {
    console.log('Compra rechazada');
} else if (dinero2 === totalAPagar2) {
    console.log('Compra justa');
} else {
    console.log('Compra realizada');
};

// Comparador menor o igual que
if (dinero2 <= totalAPagar2) {
    console.log('Compra rechazada');
} else {
    console.log('Compra realizada');
};

// Condicionales else if anidados
if (dinero2 === totalAPagar3) {
    console.log('Compra justa');
} else if (dinero2 === 200) {
    console.log('Dinero insuficiente');
} else if (dinero2 >= 1000) {
    console.log('Monto de ahorro excedido');
} else if (dinero2 >= totalAPagar3) {
    console.log('Compra realizada');
} else {
    console.log('¡Caiste acá!');
}