

// ESTRUCTURASDE CONTROL

let a = 10;

if( a >= 10){
    console.log("A es mayor o igual a 10")
}else{
    console.log("A es menor a 10")
}

//console.log("Fin del programa");

// la palabra new sirve para crear nevas instancias u objetos
const hoy = new Date();
let dia = hoy.getDay();

// SE PUEDE USAR CON OBJETOS
let diaSemana = [
                    'Domingo',
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sabado'
                ];
console.log({"hoy":diaSemana[dia]});                