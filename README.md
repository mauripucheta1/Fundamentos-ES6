# Temario extenso de JavaScript

> README detallado pensado para quien quiere aprender JavaScript desde cero hasta conceptos intermedios/avanzados. Incluye explicacione y ejemplos.

---

## Índice

### Introducción

Visión general de JavaScript: lenguaje dinámico, interpretado y esencial para la web moderna, tanto en frontend como backend.

### Variables

Cómo declarar, inicializar y gestionar datos en memoria con var, let y const, y sus diferencias de alcance.

### Strings - Cadenas de texto

Manipulación de texto con comillas y template literals, más métodos útiles para procesar y transformar cadenas.

### Números

Tipos numéricos en JS (Number, BigInt), operaciones comunes, problemas de precisión y funciones matemáticas.

### Operadores

Uso de operadores aritméticos, lógicos, de comparación, asignación y nuevas formas como ?? y ?..

### Booleans (Booleanos) y truthy/falsy

Valores lógicos, conversión implícita, evaluación condicional y qué valores son considerados falsy en JavaScript.

### Objetos

Estructuras clave para modelar entidades con pares clave-valor, métodos, herencia prototípica y clases ES6.

### Arrays (Arreglos)

Colecciones ordenadas de datos, formas de manipulación, desestructuración y su rol central en la programación JS.

### Funciones

Bloques de código reutilizables, declaración vs expresión, arrow functions, parámetros y el concepto de closures.

### Estructuras de control

Herramientas para el flujo del programa: condicionales, bucles, manejo de errores y decisiones múltiples.

### Iteradores y protocolos de iteración

Cómo recorrer colecciones con for...of, generadores y la implementación del protocolo iterable en objetos.

### Array methods - métodos de arreglo

Funciones integradas como map, filter, reduce y más, para transformar, filtrar y trabajar con colecciones.

### DOM - Document Object Model

Interfaz que conecta JS con HTML, permitiendo seleccionar, crear, modificar y eliminar elementos de la página.

### Eventos

Sistema de interacción con el usuario: clicks, teclado, formularios y delegación de eventos para eficiencia.

---

# Introducción

JavaScript (JS) es un lenguaje de programación interpretado, de alto nivel, usado principalmente en navegadores para añadir interactividad a páginas web. Desde la aparición de Node.js también se usa en servidores. ES (ECMAScript) es la especificación; las versiones modernas (ES6+) incluyen muchas mejoras.

### ¿Qué aprenderás con este temario?

* Sintaxis y tipos primitivos.
* Manipulación del DOM y manejo de eventos.
* Funciones avanzadas, closures y this.
* Estructuras de datos (objetos, arrays) y métodos útiles.
* Iteradores, generadores y el protocolo de iteración.
* Buenas prácticas, debugging y pequeñas aplicaciones.

### Entorno recomendado

* Editor: VSCode.
* Navegador con consola DevTools (Chrome/Firefox).

---

# Variables

JavaScript tiene tres formas principales para declarar variables: `var`, `let` y `const`.

## `var`

* Declaración tradicional.
* Tiene **scope de función** (o global si se declara fuera de una función).
* Las declaraciones con `var` se *hoistean* (hoisting): la declaración se mueve arriba de su contexto, pero la asignación no.

```js
console.log(x); 
var x = 5;
```

## `let` y `const` (ES6)

* `let` tiene **scope de bloque** (entre `{ }`).
* `const` define constantes: la referencia no puede reasignarse, pero los objetos/arrays mutables sí pueden cambiar su contenido.
* Ambos están sujetos a la **Temporal Dead Zone (TDZ)**: acceder antes de la declaración lanza un error.

```js
if (true) {
  let a = 10;
  const b = 20;
}
console.log(a); // ReferenceError
```

### Buenas prácticas

* Usar `const` por defecto; usar `let` cuando necesites reasignar.
* Evitar `var` en código moderno.
* Nombres descriptivos: `totalVenta`, `userId`.

---

# Strings (Cadenas de texto)

JavaScript soporta comillas simples, dobles y template literals (backticks). Los template literals permiten interpolación y multilínea.

```js
const nombre = 'Mauricio';
const saludo = `Hola, ${nombre}!\nBienvenido.`;
```

### Métodos útiles

* `.length` — longitud.
* `.charAt(i)`, `[i]` — carácter en posición `i`.
* `.slice(start, end)`, `.substring(start,end)` — extraer porciones.
* `.split(sep)` — dividir en array.
* `.replace(regexpOrStr, newStr)` — reemplazar.
* `.toLowerCase()`, `.toUpperCase()` — case.
* `.includes()`, `.startsWith()`, `.endsWith()` — búsqueda simple.
* `.trim()`, `.padStart()`, `.padEnd()`, `.repeat()`.

### Ejemplo

```js
const frase = '  Hola mundo, hola JS  ';
console.log(frase.trim().toUpperCase());
console.log(frase.split(', '));
```

### Consideraciones

* Para reemplazos globales usar regex con bandera `g`.
* `String` es un objeto en algunas operaciones, pero normalmente se trabaja con primitivos.

---

# Números

JS maneja números en formato `Number` (IEEE 754 — doble precisión) y `BigInt` para enteros muy grandes.

### Problemas comunes

* Precisión con decimales: `0.1 + 0.2 !== 0.3`.
* `NaN` (Not a Number) y cómo detectarlo con `Number.isNaN()`.

### Conversión y parseo

* `parseInt('10', 10)`, `parseFloat('3.14')`.
* `Number('123')` para conversión estricta.
* `toFixed(n)` para formato.

### Math

* `Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.max(...)`, `Math.min(...)`, `Math.pow(a,b)`, `Math.sqrt()`.

### BigInt

```js
const big = 9007199254740991n; // n al final
```

### Buenas prácticas

* Evitar comparar floating points directamente; usar tolerancia: `Math.abs(a - b) < EPS`.

---

# Operadores

### Aritméticos

`+`, `-`, `*`, `/`, `%`, `**`.

### Asignación

`=`, `+=`, `-=`, etc.

### Comparación

* `==` (coerción) vs `===` (estricto). Preferir `===` salvo casos conscientes.
* `<`, `>`, `<=`, `>=`.

### Lógicos

`&&`, `||`, `!`. Cortocircuito: `a || defaultValue`.

### Operador ternario

```js
const x = condition ? a : b;
```

### Nuevos operadores útiles

* Nullish coalescing `??`: usa `a ?? b` para `a` si no es `null`/`undefined`.
* Optional chaining `?.`: `obj?.prop?.subprop` evita errores si `obj` es `null`.

### Operadores bit a bit

`&`, `|`, `^`, `~`, `<<`, `>>` — usados raramente en apps web.

---

# Booleans (Booleanos) y truthy/falsy

Valores falsy en JS: `false`, `0`, `-0`, `0n`, `""` (string vacío), `null`, `undefined`, `NaN`.
Todo lo demás es truthy.

```js
if ('') console.log('truthy'); else console.log('falsy'); // "falsy"
```

### Conversión explícita

`Boolean(value)` convierte a booleano.

### Cortocircuito y evaluación

`a && b` devuelve `a` si `a` es falsy; de lo contrario `b`.

---

# Objetos

Los objetos son colecciones de pares clave-valor.

```js
const persona = {
  nombre: 'Ana',
  edad: 30,
  saludar() { console.log('Hola ' + this.nombre); }
};
```

### Acceso

* Punto: `persona.nombre`.
* Corchetes: `persona['nombre']` (útil para claves dinámicas).

### Propiedades computadas

```js
const key = 'email';
const u = { [key]: 'a@dominio.com' };
```

### Getters y setters

```js
const obj = {
  _x: 1,
  get x() { return this._x; },
  set x(val) { this._x = val; }
};
```

### Prototipos y herencia

* Cada objeto tiene un `[[Prototype]]` accesible por `Object.getPrototypeOf(obj)` o `__proto__`.
* ES6 `class` es azúcar sintáctico sobre prototipos.

```js
class Animal { constructor(nombre){ this.nombre = nombre } }
class Perro extends Animal { ladrar(){ console.log('guau'); } }
```

### Copia de objetos

* `Object.assign({}, obj)` — copia superficial.
* Spread `{ ...obj }` — copia superficial.
* Para copia profunda usar librerías o `structuredClone()` (cuando esté disponible) o JSON hack `JSON.parse(JSON.stringify(obj))` (con limitaciones).

### Propiedades útiles

* `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`.
* `Object.freeze(obj)` (inmutable superficial).

---

# Arrays (Arreglos)

Estructura ordenada de valores.

```js
const nums = [1,2,3];
console.log(nums[0]);
```

### Manipulación

* `push`, `pop`, `shift`, `unshift`, `splice`.
* `slice`, `concat`, `join`.

### Desestructuración

```js
const [a, b] = [1, 2];
const [first, ...rest] = [1,2,3,4];
```

### Ejemplo de uso

```js
const productos = [
  {id:1, nombre:'Camiseta', precio: 1000},
  {id:2, nombre:'Pantalón', precio: 2500}
];
```

---

# Funciones

Las funciones son ciudadanos de primera clase: se pueden asignar a variables, pasar como argumentos y retornar.

## Declaración vs Expresión

```js
function suma(a,b){ return a+b; } // declaración
const resta = function(a,b){ return a-b; } // expresión
```

## Arrow functions

* Sintaxis corta: `const f = (a) => a * 2;`
* No tienen su propio `this` ni `arguments`.

```js
const dob = nums.map(n => n * 2);
```

## Parámetros

* Valores por defecto: `function(a=1){}`
* Rest params: `function(...args){}`
* Spread para expandir arrays: `f(...arr)`.

## Closures (clausuras)

Funciones que recuerdan el scope donde fueron creadas.

```js
function contador(){
  let c = 0;
  return () => ++c;
}
const c = contador();
console.log(c()); // 1
```

## `this` y binding

* El valor de `this` depende de **cómo** se llama la función.
* Métodos: `obj.metodo()` -> `this` es el objeto.
* `call`, `apply`, `bind` permiten controlar `this`.

```js
function saludar(){ console.log(this.name); }
saludar.call({name:'M'});
```

## IIFE (Immediately Invoked Function Expression)

```js
(function(){ /* código privado */ })();
```

---

# Estructuras de control

### Condicionales

* `if`, `else if`, `else`.
* `switch` para múltiples casos.

### Bucles

* `for`, `while`, `do...while`.
* `for...of` para valores iterables.
* `for...in` para enumerar propiedades (usar con cuidado: itera claves, no valores y recorre la cadena prototípica).

### Manejo de errores

* `try { } catch (e) { } finally { }`.
* `throw new Error('mensaje')` para lanzar errores.

### Ejemplo: switch

```js
switch(role){
  case 'admin':
    // ...
    break;
  default:
    // ...
}
```

---

# Iteradores y protocolos de iteración

### Protocolo de iteración

Un objeto es iterable si implementa `Symbol.iterator`, que devuelve un iterador con `.next()`.

```js
const arr = [1,2,3];
const it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
```

### Generadores

Funciones especiales que pueden pausar su ejecución con `yield`.

```js
function* contador(){
  let i = 0;
  while(true){ yield ++i; }
}
const c = contador();
console.log(c.next().value); // 1
```

### `for...of`

Consume cualquier iterable (arrays, strings, Maps, Sets, generadores).

```js
for (const x of [10,20]) console.log(x);
```

### Iteradores personalizados

Puedes crear objetos iterables implementando `Symbol.iterator`.

---

# Array methods (métodos de arreglo)

Estos son fundamentales en programación funcional y manipulación de colecciones.

### Mutadores (modifican el array)

* `push()`, `pop()`, `shift()`, `unshift()`, `splice()`.

### No mutadores (devuelven nuevo array o valor)

* `map(fn)` — transforma y devuelve un nuevo array.
* `filter(fn)` — filtra elementos.
* `reduce((acc,cur)=>..., initial)` — reduce a un único valor.
* `forEach(fn)` — itera (no retorna nada útil, usa para efectos secundarios).
* `find(fn)` — devuelve el primer elemento que cumpla.
* `some(fn)` — true si algún elemento cumple.
* `every(fn)` — true si todos cumplen.
* `includes(value)` — busca valor.
* `slice(start,end)` — porciones.
* `concat(arrs...)` — concatena.
* `flat(depth)` y `flatMap(fn)` — aplanado.
* `sort(compareFn)` — ordena (modifica el array).

### Ejemplos

```js
const nums = [1,2,3,4];
const doubles = nums.map(n => n*2);
const evens = nums.filter(n => n%2===0);
const sum = nums.reduce((a,b)=> a+b, 0);
```

### Patrón inmutable

En apps modernas (React, Redux) evita mutar arrays originales, usa spread y métodos no mutadores:

```js
const nuevo = [...arr.slice(0,i), nuevoItem, ...arr.slice(i)];
```

---

# DOM (Document Object Model)

El DOM es la representación en memoria de la estructura HTML. JS puede leer y modificar el DOM para cambiar la página.

### Selección de elementos

* `document.getElementById('id')`.
* `document.getElementsByClassName('clase')`.
* `document.getElementsByTagName('tag')`.
* `document.querySelector(selector)` y `document.querySelectorAll(selector)` (más flexible y moderno).

### Crear y modificar nodos

* `document.createElement('div')`.
* `node.textContent` o `node.innerHTML` (usar con precaución por seguridad).
* `parent.appendChild(child)` o `parent.append(child)`.
* `node.remove()` para eliminar.

### Atributos y clases

* `element.setAttribute('data-id', '123')`, `element.getAttribute('href')`.
* `element.classList.add('activo')`, `remove`, `toggle`.

### Reflow y repaint

Modificar el DOM puede costar en rendimiento. Agrupar cambios, usar `DocumentFragment` o `innerHTML` para updates masivos.

---

# Eventos

Los eventos son la forma en que el usuario interactúa con la página: clicks, teclado, submit, etc.

### Añadir escuchas

* `element.addEventListener('click', handler)` — preferido.
* `element.onclick = handler` — sobrescribe otros handlers.

### Event object

El handler recibe un objeto `event` con propiedades: `event.target`, `event.currentTarget`, `event.type`, `event.preventDefault()`, `event.stopPropagation()`.

### Propagación

* **Capturing** (de arriba hacia abajo) y **Bubbling** (de abajo hacia arriba).
* `addEventListener(type, handler, { capture: true })` para capturar.
* Delegación de eventos: attach un listener a un contenedor para manejar eventos en elementos hijos dinámicos.

```js
// Delegación
container.addEventListener('click', (e)=>{
  const btn = e.target.closest('.btn');
  if (!btn) return;
  // manejar click del botón
});
```

### Formularios

* `submit` y `preventDefault()` para evitar reload.
* Validación, `FormData` para leer datos fácilmente.

### Rendimiento y UX

* Debounce y throttle para eventos frecuentes (scroll, resize, input).
* Passive listeners para `touch`/`wheel` (`{ passive: true }`) cuando no se llama a `preventDefault()`.

---

# Proyectos prácticos y ejercicios

### Ejercicios por sección (sugeridos)

* Variables: crear un pequeño script que calcule el IMC y muestre la categoría.
* Strings: contar palabras únicas en un texto.
* Arrays/Objetos: implementar carrito de compras simple en memoria.
* Funciones: crear una función `compose` y `pipe` para componer funciones.
* Iteradores: crear un generador que produzca IDs únicos.
* DOM/Eventos: crear un TODO list con localStorage, agregar/editar/eliminar tareas.