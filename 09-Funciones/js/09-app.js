const reproductor = {

    reproducir: function (id) {
        console.log('Reproduciendo canción con ID:', id);
    },
    pausar: function (id) {
        console.log('Pausando canción con ID:', id);
    },

};

// Llamada a cada una de sus funciones
reproductor.reproducir(10);
reproductor.pausar(5);

// Agregamos una nueva key (función) al objeto
reproductor.borrar = function (id) {
    console.log('Borrando canción con ID:', id)
};

// Llamamos a la nueva key
reproductor.borrar(2);

// Aclaraciones: Dentro de un objeto (Object Literal en este caso) podemos tener funciones y utilizarlas a través de la sintaxis de punto. 