const productoTres = {

    nombre: 'Pañuelitos Elegante',
    precio: 1800,
    disponible: false

};

// Forma para agregar una nueva llave al objeto
productoTres.imagen = 'imagen.png';

// Forma para eliminar una llave del objeto
delete productoTres.disponible;

console.log('Tercer objeto:', productoTres);