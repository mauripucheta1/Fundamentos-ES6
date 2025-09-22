const productoSeis = {

    nombre: 'Tacho de basura',
    precio: 45000,
    disponible: true,
    informacion: {
        cualidades: {
            marca: 'Colombraro',
            peso: '1kg',
            color: 'Blanco' 
        },
        fabricacion: {
            pais: 'Argentina',
            provincia: 'Córdoba',
            venta: 'Jesús María'
        }
    }

};

console.log('Sexto objeto:', productoSeis);

// Object Destructuring
const { nombre: nombreProductoSeis, informacion: { fabricacion: { venta } }  } = productoSeis;
console.log('Nombre del producto:', nombreProductoSeis);
console.log('Venta del producto:', venta);