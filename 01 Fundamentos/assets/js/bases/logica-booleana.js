// LOGICA BOOLEANA

const regresaTrue = () =>{
    console.log('regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('regresa false');
    return false;
}


console.warn('Not o la negacion');
console.log(!true);

// NEGACION BOOLEANA
console.log(!regresaFalse());


console.log("==========================");
console.log(regresaFalse() && regresaTrue()); // FALSE
console.log(regresaTrue() && regresaFalse()); // FALSE

console.log('===========&&===========');
regresaFalse() && regresaTrue();

// SOLO SE EJEUCUTA EL REGRESAFALSE , YA QUE JS CUANDO EJECUTA LA PRIMERA FUNCION , COMPARA Y COMO SABE QUE ES FALSE NO EJECUTA LA SIGUIENTE FUNCION  

console.warn('OR'); // TRUE

console.log(true || false);
console.log(false || false);

// SOLO EJECUTA REGRESATRUE YA QUE JS YA SABE EL RESULTADO , POR LO TANTO SOLO EJECUTA LA PRIMERA FUNCION DE ACUERDO AL OPERADOR BOOLEANO
console.log(regresaTrue() || regresaFalse());


// ASIGNACIONES
console.warn("ASIGNACIONES");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// EN AND , LA VARIABLE TOMA EL ULTIMA VALOR VERDADERO
const a1 = true && 'hola mundo' && 150;

// para que sea verdadero en la condición and todas deben ser verdaderas o falsas
const a2 = 'Hola' && 'hola mundo' && soyFalso && true;

// EN EL CASO DEL OR , SI EL PRIMER VALOR ES DISTINTO A FALSO , NULL o UNDEFINED , la variable asignará el primer valor , de lo contrario se asignará el ultimo valor
const a3 = soyFalso || 'Ya no soy falso';

const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';

// mostrará el mismo resultado que en a4 ya que , al encontrar un valor verdadero no seguirá ejecutan o asignando otros valores
const a5 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4});