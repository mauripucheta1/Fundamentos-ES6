const autenticado = true;

if (autenticado) {
    console.log('Inicio de sesión exitoso')
};

const puntaje3 = 200;

function revisarPuntaje() {

    if (puntaje3 > 150) {
        console.log('Puntaje excelente... Felicidades');
        return;
    };

    if (puntaje3 > 100) {
        console.log('Excelente');
        return;
    };

};

revisarPuntaje();

// Aclaraciones: Aquí lo que hicimos fue cortar el flujo de ejecución de un IF a través de un RETURN, para salir de la función