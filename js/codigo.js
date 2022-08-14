function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado ="Piedra ✊";
    }else if(jugada == 2){
        resultado ="Papel 🧻";
    }else if(jugada == 3){
        resultado ="Tijera ✂";
    }else {
        resultado ="No elegiste ninguna de las opciones, perdiste -.-"
    }

    return resultado
}

function combate(){
    if(pc == jugador){
        alert("EMPATE 🖖");
    } else if(jugador == 1 && pc == 3){
        alert("GANASTE!! 🥳")
        triunfos ++;
    } else if(jugador == 2 && pc == 1){
        alert("GANASTE!! 🥳")
        triunfos ++;
    } else if(jugador == 3 && pc == 2){
        alert("GANASTE!! 🥳")
        triunfos ++;
    } else {
        alert("PERDISTE 😿")
        derrotas ++;
    }
}

//1 es piedra , 2 es papel , 3 es tijera
let jugador = 0;
let max = 3;
let min = 1;
let triunfos = 0;
let derrotas = 0;
let pc = 0;

while(triunfos < 3 && derrotas < 3){
    jugador = prompt("Elige: 1 para piedra, 2 para papel ,  3 para tijera ");
    pc = aleatorio(min, max);

    alert("PC elige " + eleccion(pc))
    alert("Tu eliges " + eleccion(jugador)) 

    //COMBATE
    combate();
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.");
