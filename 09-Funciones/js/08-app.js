function mutiplicar (a, b) {

    return a * b;

};

const resultado = mutiplicar(5, 5);
console.log('Resultado:', resultado);

let total = 0;


function agregarCarrito (precio) {

    return total += precio;

};

function calcularImpuesto (total) {

    return total * 0.21;

};

total = agregarCarrito(300);
const impuesto = calcularImpuesto(total);

console.log('Total del carrito:', total + impuesto);