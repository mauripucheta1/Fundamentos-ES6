const productoDos = {

    nombre: 'Webcam UNNIC',
    precio: 35000,
    disponible: true

};

console.log('Segundo objeto:', productoDos);

// Acceso a valores de un objeto (sintaxis de punto (.))
console.log('Acceso a nombre:', productoDos.nombre);
console.log('Acceso a precio:', productoDos.precio);
console.log('Acceso a disponible:', productoDos.disponible);

// Acceso a valores de un objeto (llaves [])
console.log('Acceso a nombre (vía llaves):', productoDos['nombre']);
console.log('Acceso a precio (vía llaves):', productoDos['precio']);
console.log('Acceso a disponible (vía llaves):', productoDos['disponible']);