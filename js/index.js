let boton_uno = document.querySelector('#btn1');

const fecha = new Date();

boton_uno.addEventListener('click', () => {
    alert(fecha);
})

let jugadores =["Mesi", "Ronaldo", "Mbape"];
 
let btn = document.querySelector("#btn-jugador");
btn.addEventListener("click", sortearjugador);


function sortearjugador(){
  num = Math.floor(Math.random()*(jugadores.length));
    console.log(jugadores[num]);      
}