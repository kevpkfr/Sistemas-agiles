const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 555262363,
        lat: 14.555643,
        lng:34.928374774

    }
};

//console.table ( persona );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log ( persona );
console.log( persona2 );