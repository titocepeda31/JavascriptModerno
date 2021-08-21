// ESTANDAR ANTIGUO DE COMO CREAR UNA CLASE
// El problema era que se necesitaba crear una documentación para decir que sebía ocupar la palabra NEW para poder crear una nueva instancia


const fher = {
    nombre:'fernando',
    edad:30,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function persona (nombre, edad = 10){
    console.log('Se ejecutó esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){     
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);    
    }
}


// la palaba new indica que se creará una nueva instacia de persona
const maria = new persona('Maria',19);
const melhisa = new persona('Melhisa',34);

maria.imprimir();
melhisa.imprimir();

