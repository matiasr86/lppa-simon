// Rojo es el numero 1
// Azul es el numero 2
// Amarillo es el numero 3
// Verde es el numero 4

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var juegoNuevo = true;
var secuenciaPrincipal = [];
var tiempoEspera = [];
var contador = 0;
var puntaje = 0;


function obtenerNumeroAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  return numeroAleatorio;
}

function obtenerTiempoEspera() {
  var tiempo = (contador * 3000);
  contador ++;
  return tiempo;
}

var buttonPlay = document.getElementById("play");
buttonPlay.addEventListener('click', play);


function play(e){
  // Para evitar que recargue la pagina
  e.preventDefault();

  var numAleatorio = obtenerNumeroAleatorio();
  secuenciaPrincipal.push(numAleatorio)

  var waitTime = obtenerTiempoEspera();
  tiempoEspera.push(waitTime);
  

  console.log(secuenciaPrincipal);

  for (var i = 0; i < secuenciaPrincipal.length; i++) {
    var color = secuenciaPrincipal[i];
    setTimeout(ejecutar(color), tiempoEspera )
    console.log(i)

  }

  function ejecutar(color){

    console.log(color)
    if(color == 1){
      red.style.backgroundColor = "black";
      setTimeout(volverColorOriginal, 3000);

    }

    if(color == 2){
      blue.style.backgroundColor = "black";
      setTimeout(volverColorOriginal, 3000);


    }

    if(color == 3){
      yellow.style.backgroundColor = "black";
      setTimeout(volverColorOriginal, 3000);


    }

    if(color == 4){
      green.style.backgroundColor = "black";
      setTimeout(volverColorOriginal, 3000);


    }
  }



  function volverColorOriginal() {
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";

  }






}
