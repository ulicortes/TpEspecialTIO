"user strict";

let boton_uno = document.querySelector('#btn1');

const fecha = new Date();

boton_uno.addEventListener('click', () => {
    alert(fecha);
})

let jugador = document.querySelector("#jugador");
let bt = document.querySelector("#botonjugador");
bt.addEventListener("click", sortearjugador);
let jugadores =["Mesi", "Ronaldo", "Mbape", "Neymar", "DiMaria", "Tevez", "Lewandoski", "Benzema"];

function sortearjugador(){
    jugador.innerHTML="";
    num = Math.floor(Math.random()*(jugadores.length));
    jugador.innerHTML=jugadores[num];
}
