// objeto literal son objetos que tienen pares de valores
let personajes = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip:'10880 , 90265',
        ubicacion:'Malibu , California'
    },
    'ultima-pelicula': 'Infinity War'
}

console.log(personajes);
console.log('Nombre',personajes.nombre);
console.log(personajes['nombre']);
console.log('Edad',personajes.edad);
console.log('Coordenadas Lat',personajes.coords.lat);
console.log('Coordenadas Lng',personajes.coords.lng);
console.log('Número de trajes',personajes.trajes.length);
console.log('ultimo traje:',personajes.trajes[parseInt(personajes.trajes.length) - 1]);

// PARA AGREGAR UNA PROPIEDAD CON CARACTER ESPECIAL O ESPACIO SE DEBE AGREGAR CON COMILLAS 
// EJEMPLO DE CASO LINEA 16 'ultima-pelicula': 'Infinity War'
console.log("ultima pelicula",personajes["ultima-pelicula"]);

// MAS DETALLES

// BORRA UNA PROPIEDAD DEL OBJETO

delete personajes.edad;
console.log(personajes);


// CREAR UNA NUEVA PROPIEDAD EN EL OBJETO

personajes.casado = true;
console.log(personajes);

// PARA BLOQUEAR UN OBJETO O NO PERMITIR MUTACIONES O EDICIÓN DE EL
// no permite poder cambiar el objeto original , pero si los otros sub objetos que hay dentro de él.
Object.freeze(personajes);
personajes.dinero = 10000;

// MOSTRAR LOS NOMBRES DE LAS PROPIEDADES DE UN OBJETO
// GENERA UN ARRAY CON LOS NOMBRES DE LAS PROPIEDADES
const propiedades = Object.getOwnPropertyNames(personajes);
console.log("propiedades",propiedades);

// MOSTRAR LOS VALORES DE UN OBJETO ( ARRAY)
const valores = Object.values("valores",personajes);

// CONVERTIR OBJETO EN ARRAY DE PARES

const entriesPares = Object.entries(personajes);
console.log(entriesPares);


