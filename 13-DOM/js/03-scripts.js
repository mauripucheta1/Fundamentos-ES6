// Seleccionamos un elemento
const formulario = document.getElementById('formulario');
console.log(formulario);

// Seleccionamos un elemento que no existe
const noExiste2 = document.getElementById('no-existe');
console.log(noExiste2); 

// Aclaraciones: Cuando seleccionamos un elemento con getElementById y no existe, retorna null, no error.