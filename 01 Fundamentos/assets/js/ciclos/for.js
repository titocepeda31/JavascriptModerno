


const heroes  = ['SuperMan','Mujer Maravilla','Acuaman'];

console.warn("FOR TRADICIONAL");

let i = 0;
for(i;i<heroes.length;i++){
    console.log(heroes[i]);
}


// Sirve par obtener la posicion de cada elemento en un array
console.warn('FOR IN');
for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('FOR OF');

for(let heroe of heroes){
    console.log(heroe);
}