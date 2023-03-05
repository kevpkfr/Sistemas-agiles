
const nombre = 'Kevin';
const apellido = 'Pinsag';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `
 ${ nombre } ${ apellido }`; // esto es un template string

console.log ( nombreCompleto);

function getSaludo(nombre) {
    return ' Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre) }`);