// Arrow functions (función flecha)
const gritar = nombre => `El usuario ${nombre} está gritando.`;

const retar = (nombre, apellido) => `El usuario con nombre ${nombre} y apellido ${apellido} está siendo retado`;

console.log(gritar('Mauricio'));
console.log(retar('Mauricio', 'Pucheta'));

// Aclaraciones: En una función de flecha, si solamente tenemos un único parámetro podemos obviar los paréntesis (), pero, si son 2 o más, son obligatorios.