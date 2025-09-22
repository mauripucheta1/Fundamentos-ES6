const productoCinco = {

    nombre: 'Monitor',
    precio: 45000,
    disponible: true,
    informacion: {
        cualidades: {
            pulgadas: 22,
            peso: '4kg',
            color: 'Negro' 
        },
        fabricacion: {
            pais: 'Argentina',
            provincia: 'Tierra del Fuego',
            venta: 'Córdoba'
        }
    }

};

console.log('Quinto objeto:', productoCinco);

// Destructuring (sintaxis de punto (.))
console.log('Información del producto:', productoCinco.informacion);

// Destructuring (sintaxis de punto (.))
console.log('Peso del producto:', productoCinco.informacion.cualidades.peso);

// Destructuring (sintaxis de punto (.))
console.log('Provincia donde se produjo la venta del producto:', productoCinco.informacion.fabricacion.venta);