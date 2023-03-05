// desestructurcion
//asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}

const { nombre, edad , clave } = persona;  

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ( { nombre, edad }) => {

    //const { edad, clave, nombre,} = usuario

    //console.log( nombre , edad , rango = 'capitan');
    return{
        nombreClave: clave,
        años: edad,
        latlng:{
            lat:14.555,
            lng:-36.535
        }
    }
}

const { nombreClave, años, latlng:{ lat, lng}} = useContext( persona );
console.log( nombreClave, años);
console.log( lat, lng);