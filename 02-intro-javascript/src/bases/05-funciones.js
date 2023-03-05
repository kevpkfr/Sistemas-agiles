//funsioes en javascript

const saludar = function( nombre ) {
    return `Hola, ${ nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre}`;
} 

const saludar3 = ( nombre ) => `Hola, ${ nombre}`; 
const saludar4 = () => `Hola Mundo`;
console.log( saludar2('vegeta') )
//console.log( saludar('goku') )1

console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () => ({
        uid: 'ABC!"#',
        username: 'kevinjjjj'
    
});

const getUsuarioActivo = ( nombre ) => ({
    
        uid: 'ABC123',
        username: nombre   
});

const userActivo = getUsuarioActivo( 'kevin');

console.log( userActivo)
//console.log(getUser);