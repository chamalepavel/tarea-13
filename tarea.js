matriz.js

// Función decorativa para identificar tareas
const mostrarTarea = (nombreTarea) => {
    console.log("\n************************************");
    console.log(`>>> Tarea actual: ${nombreTarea}`);
    console.log("------------------------------------");
};

// Tarea 1: Obtener el último valor de un array
mostrarTarea("Obtener último valor de un array");

const listaFrutas = ['manzana', 'banana', 'naranja', 'uva'];
const frutaFinal = listaFrutas.at(-1);

console.log(`Lista de frutas: [${listaFrutas}]`);
console.log(`Última fruta: "${frutaFinal}"`);

// Tarea 2: Usar métodos menos comunes de arrays (MDN)
mostrarTarea("Métodos adicionales de MDN");

const datosAnidados = [[1, 2], [3, 4], [5]];
const datosPlanos = datosAnidados.flat();

console.log(`Original (anidado): ${JSON.stringify(datosAnidados)}`);
console.log(`Aplanado: [${datosPlanos}]`);

// Tarea 3: Convertir array en cadena
mostrarTarea("Convertir array a cadena");

const listaPalabras = ['Hola', 'mundo', 'JavaScript'];
const resultadoCadena = listaPalabras.join(' ');

console.log(`Array original: [${listaPalabras}]`);
console.log(`Resultado: "${resultadoCadena}"`);

// Tarea 4: Resultado devuelto por .push()
mostrarTarea("Valor retornado por push()");

const serieNumeros = [10, 20, 30];
console.log(`Números iniciales: [${serieNumeros}]`);
const longitudDespuesPush = serieNumeros.push(40);

console.log(`Longitud nueva tras .push(40): ${longitudDespuesPush}`);
console.log(`Array actualizado: [${serieNumeros}]`);

// Tarea 5: Insertar matrices dentro de otra
mostrarTarea("Insertar arrays dentro de array principal");

const conjuntoMatrices = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
];

console.log("Contenido anidado: " + JSON.stringify(conjuntoMatrices));

// Tarea 6: Acceso a un valor específico dentro del array anidado
mostrarTarea("Acceder a valor en array anidado");

const valorBuscado = conjuntoMatrices[1][2];

console.log(`Buscando conjuntoMatrices[1][2]: "${valorBuscado}"`);
