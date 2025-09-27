// Seleccionamos un elemento
const card = document.querySelector('.card');
console.log(card);

const info = document.querySelector('.premium .info'); // Seleccionamos la clase .info hija de .premium
console.log(info);

const segundaCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundaCard);

const formulario2 = document.querySelector('#formulario');
console.log(formulario2);   

const nav = document.querySelector('nav');
console.log(nav);

/* Aclaraciones: querySelector solamente va a retornar el primer elemento HTML que encuentre (coincida). 

    1) nth-child: Es un selector de CSS que funciona en JS y sirve para aplicar estilos a un elemento según su posición dentro de su padre.
    2) #: Es un selector que nos permite seleccionar elementos por su ID.
    3) .: Es un selector que nos permite seleccionar elementos por su clase.
    4) nombreElementoHTML: Es un selector que nos permite seleccionar un elemento HTML.
*/