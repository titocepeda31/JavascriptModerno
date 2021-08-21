
const carros = ['Ford','Mazda','Honda','Toyota'];
let i = 0;

console.warn("WHILE");
// while (i < carros.length)
while(carros[i]){
    console.log(carros[i]);
    i++;
}

console.warn("DO WHILE");


// La diferencia estará en que el do while si o si ejecutará el ciclo interno una vez

// si dejara J en 10 , de igual forma lo ejecuta pero imprimirá un UNDEFINED
let j = 0;
do {
    console.log(carros[j]);
} while(carros[j]){
    console.log(carros[j]);
}