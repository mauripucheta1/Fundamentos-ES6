// Ejercicio: Reemplazar todas los métodos del archivo 09-app.js del objeto 'reproductor' utilizando arrow functions.
const reproductor2 = {

    cancion: '',
    reproducir: id => `Reproduciendo canción con ID: ${id}`,
    pausar: id => `Pausando canción con ID: ${id}`,

    // Set
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
    },

    // Get
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

};

// Uso de GETTERS y SETTERS
reproductor2.nuevaCancion = 'Murmullo';
reproductor2.nuevaCancion = 'Hola';
reproductor2.obtenerCancion;
reproductor2.obtenerCancion;

// Llamada a cada una de sus funciones
console.log(reproductor2.reproducir(10));
console.log(reproductor2.pausar(5));

// Agregamos una nueva key (función) al objeto
reproductor2.borrar = id => `Borrando canción con ID: ${id}`;

// Llamamos a la nueva key
console.log(reproductor2.borrar(2));

/* Aclaraciones: Lo que hicimos con la utilización de GET y SET fue:
    1. SET: Con SET lo que hicimos fue asignarle a la propiedad (key 'cancion') el valor (value) en este caso, 'Murmullo' y posteriormente 'Hola'. Es decir, llamamos al setter llamado 'nuevaCancion' del objeto 'reproductor2' para setear el valor de la propiedad 'cancion' primeramente a 'Murmullo' y luego a 'Hola'.
    2. GET: Lo que hicimos, fue obtener el valor de la propiedad (el value de la key) 'cancion'.
*/