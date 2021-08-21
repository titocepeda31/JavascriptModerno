/*

Dias de la semana arbimos a las 11
pero los fines de semana abrimos a las 9

entra a un sitio web, para consultar si está abierto hoy ....
*/

const dia = 0; // 0 domingo .... 1:lunes
const horaActual = 10;
let  horaApertura;
let mensaje; // esta abierto , esta cerrado , hoy abrimos a las XX:XX


if(dia===0 || dia ===6){
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log("Día de semana");
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = 'Está abierto';
}else{
    mensaje = `Está cerrado , hoy abrimos a las ${horaApertura}`;
}

// ABREBIACIÓN CON INCLUDE Y OPERADOR TERNARIO

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? `Está Abierto` : `Está Cerrado,  hoy abrimos a las ${horaApertura}`;




console.log({horaApertura,mensaje});


