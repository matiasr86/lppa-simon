// Rojo es el numero 1
// Azul es el numero 2
// Amarillo es el numero 3
// Verde es el numero 4

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var contenedorDiv = document.querySelector('.contenedor');
var buttonDiv = contenedorDiv.children[0];

var estadoDiv = document.querySelector('.estado');

var tiempoDiv = estadoDiv.children[1];
var tituloTiempo = tiempoDiv.querySelector('h2');

var perdisteDiv = document.createElement('div');


var puntajeDiv = estadoDiv.children[0];
var tituloPuntaje = puntajeDiv.querySelector('h2');
console.log(tituloTiempo.textContent)



var secuenciaPrincipal = [];
var secuenciaJugador = [];
var puntaje = 0;
var contador = 0;
var estado = false;
var nuevoJuego = true;
var tiempo = 3;
var temporizador;

function restablecerVariables(){
  perdisteDiv.remove();
  tituloPuntaje.textContent = "Puntaje: 0";
  secuenciaPrincipal = [];
  secuenciaJugador = [];
  puntaje = 0;
  contador = 0;
  estado = false;
  nuevoJuejo = false;
  tiempo = 3;

  red.style.backgroundColor = 'rgb(100, 0, 0)';
  red.style.border = '4px solid rgb(48, 46, 46)';

  blue.style.backgroundColor = 'rgb(0, 0, 100)';
  blue.style.border = '4px solid rgb(48, 46, 46)';

  yellow.style.backgroundColor = 'rgb(204, 204, 0)';
  yellow.style.border = '4px solid rgb(48, 46, 46)';

  green.style.backgroundColor = 'rgb(0, 80, 0)';
  green.style.border = '4px solid rgb(48, 46, 46)';
  
}




function obtenerNumeroAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  return numeroAleatorio;
}



// Eventos 
var buttonPlay = document.getElementById("play");
buttonPlay.addEventListener('click', start);


red.addEventListener('click', checkSecuencia);
blue.addEventListener('click', checkSecuencia);
yellow.addEventListener('click', checkSecuencia);
green.addEventListener('click', checkSecuencia);


function start(e){
  // Para evitar que recargue la pagina
  e.preventDefault();
  if(nuevoJuego){
    restablecerVariables();
  }

  play();

}

function play(){
  tituloTiempo.textContent = 'Recordar...';
  var numAleatorio = obtenerNumeroAleatorio();
  secuenciaPrincipal.push(numAleatorio);

  console.log(secuenciaPrincipal)

  for(var i = 0; i<= secuenciaPrincipal.length; i++){
    //await delay(1000);
    var espera = (i * 1500);
    ejecutar(secuenciaPrincipal[i], espera);
  }
  contador=0;
  estado = true;
  //await delay(espera);

  setTimeout(function(){
    tiempoDisponible();
  }, espera);

  
}



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function ejecutar(num, seg) {
  //await delay(seg); // Esperar x segundos
  setTimeout(function(){
    cambioColor(num);

  }, seg);
  //setTimeout(cambioColor(num), 10000);
  //cambioColor(num)
}

function cambioColor(num){
  console.log("Cambio color");
  switch (num) {
    case 1:
      // Código a ejecutar si opcion es igual a 1
      red.style.backgroundColor = "red";
      red.style.border = '4px solid white';
      //await delay(500);
      setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 2:
      // Código a ejecutar si opcion es igual a 2
      blue.style.backgroundColor = "blue";
      blue.style.border = '4px solid white';
      //await delay(500);
      setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 3:
      // Código a ejecutar si opcion es igual a 3
      yellow.style.backgroundColor = 'rgb(255, 255, 0)';
      yellow.style.border = '4px solid white';
      //await delay(500);
      setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 4:
      green.style.backgroundColor = 'rgb(0, 255, 0)';
      green.style.border = '4px solid white';
      //await delay(500);
      setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;
  }
}


function restablecer(){
  console.log("Reestablecer");
  //await delay(500);
  red.style.backgroundColor = 'rgb(100, 0, 0)';
  red.style.border = '4px solid rgb(48, 46, 46)';

  blue.style.backgroundColor = 'rgb(0, 0, 100)';
  blue.style.border = '4px solid rgb(48, 46, 46)';

  yellow.style.backgroundColor = 'rgb(204, 204, 0)';
  yellow.style.border = '4px solid rgb(48, 46, 46)';

  green.style.backgroundColor = 'rgb(0, 80, 0)';
  green.style.border = '4px solid rgb(48, 46, 46)';

}

async function checkSecuencia(e){
    // Para evitar que recargue la pagina
    e.preventDefault();
    if(!estado){
      
    }else{
      var divId = e.target.id;
      var color = 0;
  
      if(divId == "red"){
        color = 1;
        red.style.backgroundColor = "red";
        red.style.border = '4px solid white';
        await delay(100);
        red.style.backgroundColor = 'rgb(100, 0, 0)';
        red.style.border = '4px solid rgb(48, 46, 46)';
        
      };
      if(divId == "blue"){
        color = 2;
        blue.style.backgroundColor = "blue";
        blue.style.border = '4px solid white';
        await delay(100);
        blue.style.backgroundColor = 'rgb(0, 0, 100)';
        blue.style.border = '4px solid rgb(48, 46, 46)';

      };
      if(divId == "yellow"){
        color = 3;
        yellow.style.backgroundColor = 'rgb(255, 255, 0)';
        yellow.style.border = '4px solid white';
        await delay(100);
        yellow.style.backgroundColor = 'rgb(204, 204, 0)';
        yellow.style.border = '4px solid rgb(48, 46, 46)';
      };
      if(divId == "green"){
        color = 4;
        green.style.backgroundColor = 'rgb(0, 255, 0)';
        green.style.border = '4px solid white';
        await delay(100);
        green.style.backgroundColor = 'rgb(0, 80, 0)';
        green.style.border = '4px solid rgb(48, 46, 46)';
      }; 
  

      if(secuenciaPrincipal[contador] != color){
        perdiste();
      }
      else{
        contador++;
    
        if (contador == secuenciaPrincipal.length){
          estado = false;
          clearTimeout(temporizador);
          //await delay(1000);
          tituloPuntaje.textContent = "Puntaje: " + contador;
          tiempo += 0.5;
          setTimeout(function(){
            play();
          },1000);
          
        }

      }
  
    }

}


function perdiste(){

  red.style.backgroundColor = "black";
  blue.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
  estado = false;
  nuevoJuego = true;

  perdisteDiv = document.createElement('div');
  


  perdisteDiv.id = 'perdiste-div';
  perdisteDiv.style.backgroundColor = '#ff5252';
  perdisteDiv.style.padding = '10px';
  perdisteDiv.style.textAlign = 'center';
  perdisteDiv.style.marginTop = '5px';
  perdisteDiv.style.marginBottom = '5px';
  perdisteDiv.style.width = '400px';
  perdisteDiv.style.borderRadius = '5px';

  // Crear el elemento <p> dentro del <div>
  var perdisteTexto = document.createElement('p');
  perdisteTexto.textContent = 'Perdiste, no hay nadie peor que vos';
  perdisteTexto.style.fontSize = '16px';
  perdisteTexto.style.color = 'white';
  perdisteTexto.style.margin = '0px';
  perdisteTexto.style.textTransform = 'uppercase';
  perdisteTexto.style.fontWeight = 'bold';

  // Añadir el elemento <p> al <div>
  perdisteDiv.appendChild(perdisteTexto);

  // Añadir el <div> al div padre
  contenedorDiv.insertBefore(perdisteDiv, buttonDiv); 
}




function tiempoDisponible(){

  var tiempoDisponible = tiempo;
  var tiempoDisponibleWhile = tiempo;
  var segundos = 1000;
  tituloTiempo.textContent = 'Tiempo: ' + tiempoDisponible;

  setTimeout(function(){

    temporizador;

  },1000);

  temporizador = setInterval(function(){
    tiempoDisponible = tiempoDisponible - 1;
    tituloTiempo.textContent = 'Tiempo: ' + tiempoDisponible;
    console.log("set time while")
    if(tiempoDisponible <= 0 && estado){
      tituloTiempo.textContent = 'Tiempo: 0';
      perdiste();
      clearInterval(temporizador);
      return;
    }
  }, 1000);


}



