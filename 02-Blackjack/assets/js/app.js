/*

PROBLEMAS

facil manipulación de las funciones de manera externa
el código se encuentra en el objeto global , por lo que lo hace manipulable desde la consola y sin restricciones
Se deben eliminar los mensajes de la consola ya que son pistas de como funciona nuestra aplicación
*/


// funcion anonima auto invocada , no tiene referencia por nombre lo que la hace imposible de poder llamarla nuevamente
// las funciones y el codigo se encuentra en memoria lo que la hace dificil poder llamar ya que no tiene un identificador por nombre
(() => {
    'use strict' // JS se estricto al evaluar mi codigo

const   tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

let deck = [], puntosJugadores = []; // creo la baraja

// REFERENCIAS HTML

const   btnPedir      = document.querySelector("#btnPedir"),
        btnDetener    = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
        puntuacion    = document.querySelectorAll('small'); // 0 = jugador , 1 = Computadora


const divCartasJugadores = document.querySelectorAll('.divCartas');        

const inicializarJuego = (numJugadores = 2) =>{
    deck = crearDeck();
    puntosJugadores = [];
    for(let i = 0; i<numJugadores;i++){
        puntosJugadores.push(0);
        puntuacion[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }   

    estadoBotones(false);
    
    
} 

// ESTA FUNCION CREA UNA NUEVA BARAJA
const crearDeck = () =>{

    for(let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(`${i}${tipo}` );            
        }        
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(`${esp}${tipo}`);
        }
    }    

    return _.shuffle(deck);
    
   

}




// ESTA FUNCION PERMITE TOMAR UNA CARTA

const pedirCarta = ()=> {
    // Validación Juego , cuando no hayan mas cartas
    if(deck.length === 0)
        // muestra un error en la consola y no pemrite ejecutar el programa
        throw 'No quedan cartas en la baraja';   
    return deck.pop();    
}

const valorCarta = (carta) =>{
    // En JS los string puede ser tratados como array , al agregar un posicion nos dará un resultado    
    // const valor = carta[0]; En este caso mostrará solo el numero , pero no es lo recomendable ya que tendremos problemas con el numero 10
    // ELIMINO LA ULTIMA POSICIÖN DEL STRING
    const valor = carta.substring(0,carta.length -1);   
    return (!isNaN(valor))? parseInt(valor) : (valor==='A') ? 11 : 10;
}

// TURNO DE LA COMPUTADORA


const acumularPuntos = (carta,turno) =>{
// 0 es el primero jugador , el ultimo será la computadora
 puntosJugadores[turno] =puntosJugadores[turno] + valorCarta(carta);   
 puntuacion[turno].innerText = puntosJugadores[turno];  
 return puntosJugadores[turno];
}

const crearCarta = (carta,turno) =>{
    const imgCarta = document.createElement('img');   
    imgCarta.src =`assets/cartas/${carta}.png`;   
    imgCarta.classList.add('carta')    
    divCartasJugadores[turno].append(imgCarta);
}


const determinarGanador = () =>{
    setTimeout(()=>{
        const [puntosMinimos , puntosComputadora] = puntosJugadores;
        if(puntosComputadora === puntosMinimos){
            alert("EMPATE , NADIE GANA")
        }else if(puntosMinimos > 21){
            alert("COMPUTADORA GANA");    
        }else if(puntosMinimos <= 21 && puntosComputadora > 21) {
            alert("GANA JUGADOR");
        }else{
            alert("GANA LA COMPUTADORA");
        }

        //
    },60);

    estadoBotones(false);
}

const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length -1);
        crearCarta(carta,puntosJugadores.length - 1);
        //puntosComputadora = puntosComputadora + valorCarta(carta);   
        //puntuacion[1].innerText = puntosComputadora;         
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador();
}

const estadoBotones = (estado = false) =>{
    btnPedir.disabled = estado;
    btnDetener.disabled = estado;
}


//  Eventos


btnPedir.addEventListener('click',() => {
       
            const carta = pedirCarta();
            // acumulo los puntos del jugador por cada vez que se piden cartas    
            // imprimo el valor de los puntos del jugador en su marcador    
            // jugador = 0 , computadora = 1
           const puntosJugador = acumularPuntos(carta,0);
           crearCarta(carta,0);                        


            // valido que los puntos obtenidos por el jugador no superen los 21 puntos
            // si lo superan bloqueo el boton para pedir cartas
            if(puntosJugador > 21){               
                turnoComputadora(puntosJugador);
            }else if( puntosJugador === 21){              
                estadoBotones(true);
                turnoComputadora(puntosJugador);
            }          

});

btnDetener.addEventListener('click',() => {
   
    estadoBotones(false);
    turnoComputadora(puntosJugadores[0]);
});


btnNuevoJuego.addEventListener('click', () =>{
    
    inicializarJuego();

    
});
    


})();






