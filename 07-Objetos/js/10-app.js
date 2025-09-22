"use strict";

const productoDiez = {

    nombre: 'Mouse',
    precio: 21000,
    disponible: false

};  

const cualidades = {

    peso: '750gr',
    color: 'Negro RGB',
    marca: 'Noga'

};

console.log('Décimo objeto:', productoDiez);
console.log('Décimo primer objeto:', cualidades);

// 1. Método para unir ámbos objetos (Assign Object Method)
const objetosUnidos = Object.assign(productoDiez, cualidades);
console.log('Resultado de unir el Décimo objeto + Décimo primer objeto (Assign Object Method):', objetosUnidos);

// 2. Método para unir ámbos objetos (Spread Operator)
const objetosUnidosDos = { ...productoDiez, ...cualidades };
console.log('Resultado de unir el Décimo objeto + Décimo primer objeto (Spread Operator):', objetosUnidosDos);
