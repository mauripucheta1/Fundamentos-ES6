const metodoDePago = 'Efectivo';

switch (metodoDePago) {

    case 'Efectivo':
        console.log('¡Descuento del 15%!');
        pagar();
        break;
    case 'Transferencia':
        console.log('¡Recargo del 2%!');
        break;
    case 'Tarjeta':
        console.log('¡Recarga del 10%!');
        break;
    default:
        console.log('Método de pago no soportado.');
        break;

};

function pagar () {
    console.log('Pagando...');
};