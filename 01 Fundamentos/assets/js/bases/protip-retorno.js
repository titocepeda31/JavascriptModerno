
// EN ESTA FUNCION DEVOLVERA UNDEFINDED , YA QUE DEVOLVERA EL CUERPO DE LA FUNCION DE FECHA Y NO EL RETORNO DE UNA FUNCION FLECHA
//const crearPersona = (nombre,apellido) => {nombre,apellido}

// USANDO LOS PARENTESIS SE ESPECIFICA QUE SE QUIERE DEVOLVER TODO LO QUE ESTA DENTRO DE ELLOS EN FORMA DE OBJETO
const crearPersona = (nombre,apellido) => ({nombre,apellido})
const persona = crearPersona('Alejandro','Cepeda');
console.log(persona);


// FUNCION NORMAL

function imprimeArgumentos(){
    console.log( arguments);
}

console.log(imprimeArgumentos(10,"hola", true));


// LAS FUNCIONES FLECHAS NO PUEDEN LISTAR LOS ARGUMENTOS DE LA FUNCION POR SI SOLOS TAL COMO SE HACEN EN LA FUNCIONES NORMALES
// SI QUEREMOS IMPLEMENTAR ARGUMENTOS EN ELLAS , DEBEMOS USAR EL RECURSO DE REST , QUE ES TRANSFORMAR TODOS LOS PARAMETROS EN UN ARRAY (...ARGS) // no lleva parentesis
// COMO CONDICIÓN EN NUESTRA FUNCIÓN SIEMPRE DEBEN IR AL FINAL
// Y SI HAY OTRO PARAMETRO ANTES QUE EL , SE CONSIDERA COMO UN ARGUMENTO INDEPENDIENTE DE (...ARGS) no lleva parentesis
const imprimeArgumentosDos = (edad,...ARGS) =>{
    return ARGS;
}

console.log(imprimeArgumentosDos(24,'tito','cepeda',32,true))

// PARA CREAR O NOMBRAS LAS PROPIEDADES ,SE PUEDEN CREAR EN LA MISMA FUNCIÓN Y 
// Y LLAMAS EN EL CUERPO DE ESTA MISMA
// EJEMPLO


const [nombre,apellido,edad,hijos] = imprimeArgumentosDos(24,'tito','cepeda',32,true);
console.log("datos",{nombre,apellido,edad,hijos});


// PARA RETORNAR EL VALOR DE UNA PROPIEDAD 
// NOS VASAMOS EN UNA FUNCIÓN QUE RETORNA UN OBJETO , EN ESTE CASO DEFINIMOS EL NOMBRE DE O LAS PROPIEDADES QUE NOS INTERESAN , PERO QUE YA ESTAN EN LA FUNCIÓN
// PARA CAMBIAR EL NOMBRE DE LA VARIABLE EMPLEAR DOS PUNTOS (nombre:nombreCompleto)
const {apellido:apellidoPaterno} = crearPersona('Alejandro','Cepeda'); 
console.log(apellidoPaterno);


// DESTRUCTURACION DE ARGUMENTOS

const tony = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad:40,    
    trajes:['Mark I','Mark V','Hulkbuster']    
}


// COMO NO SE DEBE TRABAJAR
/*const imprimePropiedades = (personaje) =>{
    console.log("Nombre",personaje.nombre)
    console.log("codeName",personaje.codeName)
    console.log("Vivo",personaje.vivo)
    console.log("Edad",personaje.edad)
    console.log("Trajes",personaje.trajes)
}

imprimePropiedades(tony);

*/


// SI EN ALGUN CASO NO VIENE DEFINIDA UNA PROPIEDAD PODEMOS DEFINIRLA DETRO DE LOS PARENTESIS
// EDAD = 0

const imprimePropiedades = ({nombre,codeName,vivo,edad,trajes}) =>{
    console.log({nombre})
    console.log(codeName)
    console.log(vivo)
    console.log(edad)
    console.log(trajes)
}
imprimePropiedades(tony);





