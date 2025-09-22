const productoCuatro = {

    nombre: 'Zapatillas deportivas UnderArmour',
    precio: 13000,
    disponible: true,
    talle: 41.5

};

// 1. Asignación a través de sintaxis de punto
const nombreProductoCuatro = productoCuatro.nombre;
console.log('Nombre del producto (Sintaxis de punto):', nombreProductoCuatro);

// 2. Object Destructuring (OD)
const { nombre } = productoCuatro;
console.log('Nombre del producto (Object Destructuring):', nombre);

const { precio } = productoCuatro;
console.log('Precio del producto (Object Destructuring):', precio);

// Simplificación de OD + Template Strings
const { disponible: estadoDisponible, talle } = productoCuatro;
console.log(`Disponibilidad del talle: ${estadoDisponible ? 'Sí' : 'No'}; Talle: ${talle}`);

console.log('Cuarto objeto:', productoCuatro);