const meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses4 = ['Agosto', 'Septiembre'];
const meses5 = ['Octubre', 'Noviembre', 'Diciembre'];

// Método .concat
const resultadoMeses = meses3.concat(meses4);
console.log(resultadoMeses);

// Método Spread Operator
const resultado7 = [...meses3, ...meses4, ...meses5];
console.log(resultado7);

const resultado71 = [...meses3, ...meses4, ...meses5, 'Mes inexistente'];
console.log(resultado71);

// Aclaraciones: Podemos concatenar varios arrays a través del método concat o utilizando el spread operator.