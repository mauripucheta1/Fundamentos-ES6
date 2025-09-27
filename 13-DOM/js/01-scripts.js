let elemento;

// Métodos del documento 

elemento = document; // DOM General
elemento = document.all; // Todos los elementos dentro
elemento = document.head; // La cabeza del DOM
elemento = document.body; // El cuerpo del DOM
elemento = document.domain; // El dominio 

elemento = document.forms; // Todos los formularios
elemento = document.forms[0]; // El formulario en la posición 0
elemento = document.forms[0].id; // El ID del formulario en la posición 0
elemento = document.forms[0].method; // El método del formulario en la posición 0
elemento = document.forms[0].classList; // Las clases del formulario en la posición 0
elemento = document.forms[0].action; // La acción del formulario en la posición 0

elemento = document.links; // Todos los links
elemento = document.links[4].classList; // Las clases de los links en la posición 4 (forma de Array)
elemento = document.links[4].className; // Las clases de los links en la posición 4 (forma de String)

elemento = document.images; // Todas las imágenes

elemento = document.scripts; // Todos los scripts

console.log(elemento);