 // una funcion es centralizar la ligica de un procedimiento que podemos reutilizar nuevamente


 // FUNCION BASICA NO RECOMENDADA

 function saludar(){
     console.log("hola mundo");
 }

// SE ASIGNA A UNA CONSTANTE Y NO HAY MANERA DE ESTA FUNCION SE VUELVA A REUTILIZAR ESA FUNCION

 const saludar2 = function(){
    console.log("hola mundo");
 }


 // FUNCION FECLA o LAMBA
 const saludarFlecha = (nombre) =>{
     console.log("hola" + nombre);
 }

saludarFlecha('Tito Cepeda');

// LOS CONSOLE LOG SOLO MUETSRAN INFORMACION EN PANTALLA
// NO RETORNAN INFORMACIÓN
// PARA RETORNAR INFORMACION SE DEBE USAR RETURN


// funcion suma

const suma = (a,b) =>{
    return a + b;
}
console.log(suma(3,4));

// SI EJECUTAMOS UNA FUNCION FLECHA Y ESTA SE COMPONE DE UNA SOLO LINEA O SOLO EN RETURN , PODEMOS ABREVIAR
// NUESTRA FUNCION DE LA SIGUIENTE MANERA

const sumaDos =  (a,b) => a + b;
console.log(sumaDos(5,9));


// OTRA FUNCION SIN USAR LLAVES DE CIERRE

const getAleatorio = () => Math.random();
console.log(`${getAleatorio()}`);