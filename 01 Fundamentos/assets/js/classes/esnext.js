// METODOS y PROPIEDADES PRIVADAS

class Rectangulo{

    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    get getArea(){
        return this.#area;
    }

    
}

// INSTANCIA

const rectangulo = new Rectangulo (10,15);
// LA IDEA DE ESTA CLASE ES POR QUE PUEDO ACTUALIZAR O MODFIICAR LAS PROPIEDADES DE AREA FUERA DE ESTA CLASE
// PARA DEJAR LOS VALORES PRIVADOS , SIN MODIFICARLOS DEBEMOS AGREGAR'#' a nuestra propiedad o metodo
//rectangulo.#area = 300;
console.log(rectangulo);
//console.log(rectangulo.getArea);
//console.log(rectangulo.calcularArea());

