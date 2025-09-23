// Función para dividir 
function dividir (a, b = 10) {

    console.log(`El resultado de dividir ${a} por ${b} es:`, a / b);

};

// Llamo una vez con un único argumento
dividir(20);

// LLamo otra vez con dos argumentos
dividir(20, 2);

/* Aclaraciones: Cuando definimos una función y le asignamos los parámetros, siempre al principio van los obligatorios (los que necesitan de un valor sí o sí) y al final van los por omisión, es decir, si no se proporcionó un valor, se adoptan esos. Si no se proporciona un valor para los obligatorios, arrojará 'undefined'.
*/