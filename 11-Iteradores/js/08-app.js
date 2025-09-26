const automovil = {

    model: 'Camaro',
    year: 2014,
    km: 500,
    engine: '2.5'

};

for (let caracteristica in automovil) {

    console.log(`Característica: ${automovil[caracteristica]}`)

};

for (let [llave, valor] of Object.entries(automovil)) {
    
    console.log(`${llave.toUpperCase()}: ${valor}`);

};