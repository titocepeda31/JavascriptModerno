

// un singleton es una instancia unica de una clase
// siempre retornará la misma instancia


class Singleton{

        // campos de abajo son opcionales


    static instancia; // undefinded , las variables declaradas sin valor
    nombre = '';

    constructor(nombre=''){

        //console.log(Singleton.instancia)

        // la doble negacion actua como un false , y es mas facil trabajar con valores booleanos 
        // let a; = undefinded
        // !a = true;
        // !!a = false;

        if(!!Singleton.instancia)
            // como la condicion es falsa siempre retornará el return , impidiendo que se ejecute el resto de la clase
            return Singleton.instancia;
        
        Singleton.instancia = this;
        this.nombre = nombre;
            
    }
}

const instancia1 = new Singleton('Iron Man');
const instancia2 = new Singleton('Spider Man');
const instancia3 = new Singleton('Black Panther');


console.log(`nombre en la instacia1 es  ${instancia1.nombre}`);
console.log(`nombre en la instacia2 es  ${instancia2.nombre}`);
console.log(`nombre en la instacia3 es  ${instancia3.nombre}`);

