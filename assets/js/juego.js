let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
const btnPedir = document.querySelector('btnPedir');

let puntosJugador = 0;
    puntosComputadora = 0;

//Referencias de HTML
const btnpedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadoras = document.querySelector('#Compudoras-cartas')
const puntosHTML = document.querySelectorAll('small');

const crearDeck = () =>{
    for(let i = 2; i<= 10; i++){
        for( let tipo of tipos){
            deck.push( i + tipo);
        }
    }
    for( let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo);
        }

    }
    console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
crearDeck();

//Permite tomar una carta
const pedirCarta = () => {
    if ( deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}
//Pedir carta
const valorCarta = ( carta) => {
    const valor = carta.substring(0, carta.length-1);
    return ( isNaN ( valor) ) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}

//Eventos 
btnPedir.addEventListener('click', () =>{
    const carta = pedirCarta();

    puntosJugador = puntosJugador = valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    //img
    const imgCarta = document.createElement('img');
    imgCarta.src = 'cartas/${carta}.png';
    imgCarta.classList.add('carta');

    divCartasJugador.appened(imgCarta);

    if( puntosJugador>21 ){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    } 
    //Turno de la computadora
    const turnoComputadora = (puntosminimos) =>{
        const carta = pedirCarta();

        puntosComputadora = puntosCartas = valorCarta( carta );
        puntosHTML[1].innerText = puntosCartas;
        //img
        const imgCarta = document.createElement('img');
        imgCarta.src = 'cartas/${carta}.png';
        imgCarta.classList.add('carta');
    
        divCartasComputadoras.appened(imgCarta);
    
    }
});