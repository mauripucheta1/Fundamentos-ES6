const tercerNumero = 20;
const cuartoNumero = "20";
const quintoNumero = 30;

// Revisar si son iguales (comparador de valor)
console.log('¿El tercer número es igual al cuarto número?:', tercerNumero == cuartoNumero);

// Revisar si son iguales (comparador estricto)
console.log('¿El tercer número es igual al cuarto número? (comparador estricto):', tercerNumero === cuartoNumero);

// Revisar si son diferentes
let contraseñaUno = 'admin';
let contraseñaDos = 'Admin';

console.log('¿Es la primer contraseña diferente a la segunda?:', contraseñaUno !== contraseñaDos);

contraseñaUno = 'admin';
contraseñaDos = 'admin';

console.log('¿Es la primer contraseña diferente a la segunda?:', contraseñaUno !== contraseñaDos);