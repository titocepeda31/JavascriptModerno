class Persona {    

    static _conteo = 0;
    static get getConteo(){
        return `${Persona._conteo} instancias`; 
    }
    static mensaje(){   
        console.log(this.nombre);
        console.log(`Hola a todos son un metodo estatico`)
    }

    nombre  = ''
    codigo  = ''
    frase   ='';
    comida = '';

    constructor(nombre ='sin nombre',codigo='sin codigo',frase='sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }


    set  setComidaFavorita(comida){        
        this.comida = comida.toUpperCase();
    }
    
    get getComidaFavorita(){
        return `la comida favoria de ${this.nombre} es ${this.comida}`;
    }
   

    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    
    miFrase(){
        this.quienSoy();    
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}



//const spiderMan = new Persona('Peter Parker','Spider','Soy tu amigable vecino Spider Man');


class Heroe extends Persona{
    /* necesito ocupar algunas propiedades de la propiedad persona
    para ello debemos ocupar la palabra reservada EXTENDS
    */

    clan = 'sin clan';

    constructor (nombre,codigo,frase){
        super(nombre,codigo,frase); // hace referencia a la clase que extiende directamente la clase heroe
       // con super llamo al constructor de la clase persona
        this.clan = 'Avengers'; // para llamar a una propiedad de la clase siempre se debe llamar al super constructor , cuando se estpa unsando clases heredadas
    }


    quienSoy(){
        // HAGO REFERENCIA AL METODO DE LA CLASE HEROE
        console.log(`Soy ${this.nombre} , ${this.clan} `)

        // SI QUISIERA HACER REFERENCIA AL METODO DE LA CLASE PERSONA DEBO LLAMARLO CON LA PALABRA "SUPER"
        super.quienSoy();
    }


}

//const spiderMan = new Heroe();
//console.log(spiderMan);
const spiderMan = new Heroe('Peter Parker','Spider','Soy tu amigable vecino Spider Man');
console.log(spiderMan);
console.log(spiderMan.quienSoy());

