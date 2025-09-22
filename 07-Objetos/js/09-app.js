"use strict";

const productoNueve = {

    nombre: 'Adaptador DisplayPort -> HDMI',
    precio: 4900,
    disponible: true

};  

Object.seal( productoNueve );
console.log('¿Está el objeto sellado? (seal):', Object.isSealed(productoNueve));

console.log('Noveno objeto:', productoNueve);

// Agregamos nuevas keys - values al objecto  (arrojará error)
// productoNueve.imagen = 'imagen.png';

// Editamos nuevas keys - values al objecto (no arrojará error)
productoNueve.precio = 5300;

console.log('Noveno objecto modificado:', productoNueve);


/* Aclaraciones: El Object Method llamado "seal" lo que hace es sellar el objeto permitiendo únicamente manipular las keys-values ya existentes, inhabilitando al usuario la creación y/o eliminación de nuevas keys-values.*/