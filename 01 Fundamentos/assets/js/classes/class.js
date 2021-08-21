

class Persona {

    // las propiedades estaticas y metodos , permiten poder usar dichos metodos y propiedades sin la necesidad de instanciar a la clase

   // _conteo = 0; // el guion bajo no tiene relevancia en la variable ni diferencia
  // al dejar la variable como estatica , esta se aloja en el objeto prototipo


    static _conteo = 0;

    static get getConteo(){
        return `${Persona._conteo} instancias`; 
    }

    static mensaje(){
        // no se pueden hacer referencias a propiedades ya que estamos trabajando con metodos estaticos
        console.log(this.nombre);
        console.log(`Hola a todos son un metodo estatico`)
    }

    // para definir proíedades se debe hacer aqui;
    // todas las clases en JS vienen por defecto con el "USE STRICT"
    // se pueden usar las propiedades tanto en la clase como en constructor , dependerá de como
    // queremos trabajar
    nombre  = ''
    codigo  = ''
    frase   ='';
    comida = '';

    constructor(nombre,codigo,frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        // cuento cuantas veces se llama a esta instancia
        Persona._conteo++;
    }

    // SETS espara controlar como se establece el varlo de esa propiedad , ejemplo , dejar la propiedad en mayuscula

    set  setComidaFavorita(comida){
        //el set no puede tener el mismo nombre que la propiedad ya que genera un ciclo  infinito
        this.comida = comida.toUpperCase();
    }
    
    get getComidaFavorita(){
        return `la comida favoria de ${this.nombre} es ${this.comida}`;
    }
    // Se recomienda siempre crear los metodos bajo el constructor

    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    // otro argumento

    miFrase(){
        this.quienSoy()
        // si quisiera llamar a quienSoy , debo usar el this
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}


// MANERA BASICA DE COMO LLAMAR A UNA CLASE
const spiderMan = new Persona('Peter Parker','Spider','Soy tu amigable vecino Spider Man');
const DeadSpace = new Persona('Isaac Clarke','Nicole Brennan','USG Ishimura');


console.log(spiderMan);
console.log(DeadSpace);

spiderMan.quienSoy();
DeadSpace.quienSoy();

spiderMan.miFrase();
DeadSpace.miFrase();


spiderMan.setComidaFavorita = 'El pie de cereza de la tia May';


// EL GET SE LLAMA COMO UNA PROPIEDAD DE CLASES y no se usa parentesis
console.log(spiderMan.getComidaFavorita);

//Persona._conteo


// METODOS ESTATICOS
console.log('Conteo estatico',Persona._conteo);
console.log(Persona.getConteo);
console.log(Persona.mensaje());




