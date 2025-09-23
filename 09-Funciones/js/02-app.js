// Funcionará
// Declaración de función (Function Declaration) 

sumar(2, 5); 

function sumar (a, b) {
    console.log(a + b);
};

// No funcionará
// Expresión de función (Function Expression)
// sumar3();

const sumar3 = function () {
    console.log(3 + 3);
};

/* Aclaraciones: Las diferencias entre Function Declaration y Function Expression es que debido al hoisting de JavaScript que produce que las funciones se empujen hacia arriba del código para inicializarlas primero antes que sus llamadas, es que las Function Declaration si funcionan, mientras que en una Function Expression, si llamo a la función antes de haberla declarado, arrojará error.
*/