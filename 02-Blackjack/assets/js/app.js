/*
C = TREBOLES
D = DIAMANTES
H = CORAZONES
S = PIQUES

*/

// CREAR BARAJA
let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0 ,
    puntosComputadora = 0;

// declaro la etiqueta small de la puntucion del jugador y de la computadora    
// 0 = jugador , 1 = Computadora
const puntuacion = document.querySelectorAll('small');

// REFERENCIAS HTML

const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
// ESTA FUNCIO CREA UNA NUEVA BARAJA
const crearDeck = () =>{

    for(let i = 2; i<=10; i++){
        for(tipo of tipos){
            deck.push(`${i}${tipo}` );            
        }        
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(`${esp}${tipo}`);
        }
    }    

    deck = _.shuffle(deck);
    return  deck;
   

}

crearDeck();


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

const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);   
    
        puntuacion[1].innerText = puntosComputadora;  
        let imgCarta = document.createElement('img');   
        imgCarta.src =`assets/cartas/${carta}.png`;   
        imgCarta.classList.add('carta')    
        divCartasComputadora.append(imgCarta); 

        // si el resultado del jugador es mayor a 21 , con la primera carta de la computadora ganaria 
        if(puntosMinimos > 21){
            break;
        }
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    

    setTimeout(()=>{

        if(puntosComputadora === puntosMinimos){
            alert("EMPATE , NADIE GANA")
        }else if(puntosMinimos > 21){
            alert("COMPUTADORA GANA");    
        }else if(puntosMinimos <= 21 && puntosComputadora > 21) {
            alert("GANA JUGADOR");
        }else{
            alert("GANA LA COMPUTADORA");
        }

    },60);
      

}


//  Eventos


btnPedir.addEventListener('click',() => {
       
            const carta = pedirCarta();
            // acumulo los puntos del jugador por cada vez que se piden cartas    
            puntosJugador = puntosJugador + valorCarta(carta);   
            // imprimo el valor de los puntos del jugador en su marcador    
            // jugador = 0 , computadora = 1
            puntuacion[0].innerText = puntosJugador;
            // Creo Carta 
            let imgCarta = document.createElement('img');
            // Agrego Src
            imgCarta.src =`assets/cartas/${carta}.png`;
            // Agrego clase css
            imgCarta.classList.add('carta')    
            // agrego carta al listado o a la mano de cartas
            divCartasJugador.append(imgCarta);    


            // valido que los puntos obtenidos por el jugador no superen los 21 puntos
            // si lo superan bloqueo el boton para pedir cartas
            if(puntosJugador > 21){
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                console.warn('PERDISTE');
                turnoComputadora(puntosJugador);
            }else if( puntosJugador === 21){
                console.warn('21,GENIAL');
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                turnoComputadora(puntosJugador);
            }          

});

btnDetener.addEventListener('click',() => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});


btnNuevoJuego.addEventListener('click', () =>{
    console.clear();
    let deck = [];
    crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;
    puntuacion[0].innerText = 0; 
    puntuacion[1].innerText = 0; 
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntuacion.innerHTML = '';

});




