class Persona{

    // simulo tener otro constructor 
    // {nombre , apeliido , pais} = desestructuracion de un objeto
    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }

    constructor (nombre , apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }   
    

    getinfo(){
        console.log(`info: ${this.nombre} , ${this.apellido}, ${this.pais}`);
    }
}


const nombre1 = 'Melisa' ,
      apellido1 = 'Flores',
      pais1 = 'Honduras';

const ale = {
    nombre : 'Alejandro',
    apellido: 'Cepeda',
    pais: 'Chile'
}      

const persona1 = new Persona(nombre1,apellido1,pais1);      
const persona2 = Persona.porObjeto(ale);
console.log(persona1.getinfo());
console.log(persona2.getinfo());








