"use strict";

const productoOcho = {

    nombre: 'Teclado Ttesports',
    precio: 35000,
    disponible: true

};  

Object.freeze( productoOcho );
console.log('¿Está el objeto congelado? (freezeado):', Object.isFrozen(productoOcho));

console.log('Octavo objeto:', productoOcho);

// Agregamos nuevas keys - values al object + edit de las mismas
productoOcho.imagen = 'imagen.png';
productoOcho.vendedor = 'Compucordoba';
productoOcho.precio = 42000;

/* Aclaraciones: El "use strict" activa el modo estricto de JavaScript para prevenir errores silenciosos como por ejemplo, variables implícitas, evita duplicados en parámetros de funciones, prohíbe ciertas palabras reservadas, mejora la seguridad y fomenta buenas prácticas.
Por otro lado, el Object Method llamado "freeze" lo que hace es congelar el objecto para que no se puedan agregar ni quitar keys/values de X objeto.
*/