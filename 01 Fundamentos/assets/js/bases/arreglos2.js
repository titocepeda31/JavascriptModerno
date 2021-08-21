//
let juegos = ['Mario 3','Zelda','Metroid','Sonic'];
console.log("Largo del array:",juegos.length);

// primer elemento
console.log("primer elemento:",juegos[0]);

// Ultimo elemento 
console.log("Ultimo elemento:",juegos[juegos.length - 1]);

// recorrer Arreglo
juegos.forEach((valor,key,juegos)=>{
    console.log({juegos,valor,key});
});

// Agregar elementos a un array
let nuevoJuego = juegos.push("Call Of Dutty");
console.log({nuevoJuego,juegos});

// Agregra elemento al inicio del array 
juegos.unshift("Mortal Kombat");
console.log({juegos});

// Borrar ultimo elemento de un array

let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});


// borrar una posición determinada de un array

let posicion = 1;

// splice (inicio,cantidad a borrar)
 let juegosBorrados = juegos.splice(posicion,2);
 console.log({juegosBorrados,juegos})


 // Obtener el Key de un elemento del array buscandolo por nombre
 // Es importante ingresar el nombre exacto del elemento , de lo contrario tendremos problemas

 let metroidIndexOf = juegos.indexOf("Metroid");  // Casesensitive
 console.log({"Metroid": metroidIndexOf});
