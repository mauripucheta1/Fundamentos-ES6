const autenticado2 = true;
const puedePagar3 = false;

console.log( autenticado2 ? puedePagar3 ? '¡Autenticado y puede pagar!' : '¡Autenticado y no puede pagar!' : '¡No está autenticado!' );

// Aclaraciones: Lo que hicimos fue anidar dos operadores ternarios, donde si está autenticado, va a evaluar si puede pagar o no y en función de eso va a mostrar el respectivo mensaje. En caso de que no esté autenticado, directamente ya muestra el mensaje de no autenticado.