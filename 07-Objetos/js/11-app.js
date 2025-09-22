const productoOnce = {

    nombre: 'Placa de video NVIDIDA Geforce GTX 1650',
    precio: 150000,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }

};  

const productoExtra = {

    nombre: 'Procesador Intel I5',
    precio: 95000,
    disponible: false,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }

};  

// Llamada al producto Once
productoOnce.mostrarInfo();

// Llamada al producto extra
productoExtra.mostrarInfo();

// Aclaraciones: Hasta ahora estuvimos definiendo métodos a través de Object Literals, es decir, uno por uno con nuestro código, pero existen formas de crearlos más rápidos.