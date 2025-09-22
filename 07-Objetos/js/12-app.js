// Object Literal
const productoDoce = {

    nombre: 'Auriculares Hyperx',
    precio: 240000,
    disponible: true,
    

};  

// Object Constructor
function Producto (nombre, precio) {

    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

};

// Creación de objetos empleando el constructor
const producto2 = new Producto('Micrófono Redragon', 45000);
const producto3 = new Producto('Micrófono Noga', 23000);

console.log('Objecto resultante de haber utilizado el constructor:', producto2);
console.log('Objecto resultante de haber utilizado el constructor:', producto3);