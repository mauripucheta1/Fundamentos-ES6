const tercerCarrito = [];

// Definimos un sexto producto
const producto6 = {

    nombre: 'Cuadro',
    precio: 20

};

// Definimos un séptimo producto
const producto7 = {

    nombre: 'Agenda',
    precio: 15

};

// Agregamos elementos al array (tercer carrito)
tercerCarrito.push(producto6, producto6, producto7, producto7, producto6, producto6, producto7);

// Método para eliminar el primer elemento del carrito
tercerCarrito.shift();

// Método para eliminar el último elemento del carrito
tercerCarrito.pop()

// Método para cortar un arreglo (le tengo que pasar desde dónde quiero arrancar a eliminar y cuántos quiero eliminar desde esa posición)
tercerCarrito.splice(2, 1)

console.table(tercerCarrito);