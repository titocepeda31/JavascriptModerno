

const elMayor = (a,b) =>{
    return (a > b) ? a : b;
}
console.log(elMayor(12,45));


// ABREVIACION

const elMayorDos = (a,b) => (a > b) ? a : b;
console.log(elMayorDos(122,98));


// Operador ternario con booleanos , no es necesario agregar condición

const tieneMembresia = (mienbro) => (mienbro) ? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(true));


// Operador ternario dentro de un array
// el Array soporta condiciones y funciones que retornen un valor
const amigo = false;
const amigoArr = [
    'peter',
    'tony',
    'Dr. Strange',
    (amigo)?'Thor':'Loki',
    elMayorDos(34,43)
]

console.log({amigoArr});

// Operador Ternario Anidado

const nota = 65; // A+ ,A , B+ , B

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+': 'F';     
              
console.log({nota,grado});              



