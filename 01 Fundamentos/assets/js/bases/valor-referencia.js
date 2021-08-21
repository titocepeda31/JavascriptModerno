// VALOR 
 // en Js todos los primitivos son pasados por valor
let a = 10;
let b = a;
a = 30;
console.log({a,b});


// EN JS todos los objetos son pasados por referencia
let juan = {nombre:'Juan'};
let ana = juan;
ana.nombre = 'Ana';
console.log({juan,ana});

const cambiaNombre = (...persona) => {
    persona.nombre = 'tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});



// EN ESTE CASO , NOS AGREGRA EL NUEVO ELEMENTO A AMBOS ARRAY
const frutas = ['manzana','pera','uva'];
const otrasFrutas = frutas;
otrasFrutas.push('mango');
console.table({frutas,otrasFrutas})


// DE ESTA FORMA , USAMOS EL OPERADOR SPREAD , EN DONDE COPIAMOS UN ARRAY Y LO TRABAJA COMO ARRAY INDEPENDIENTES
const otrasFrutasDos = [...frutas];
otrasFrutasDos.push('mango');
console.table({frutas,otrasFrutasDos})

// O BIEN USAR ESTA OTRA FORMA PARA TRABAJAR CON ARRAYS INDEPENDIENTES PARA NO TRABAJAR CON VALORES POR REFERENCIA

const otrasFrutasTres = frutas.slice();
otrasFrutasTres.push('mango');
console.table({frutas,otrasFrutasTres})




