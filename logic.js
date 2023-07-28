var top10 = [];
getTop10();

var flotanteDiv = document.querySelector('.flotante');
console.log(flotanteDiv);
flotanteDiv.style.cursor = "default";


var buttonCloseModal = document.getElementById("close-modal");
var score = document.getElementById("score");
console.log(score);




// Rojo es el numero 1
// Azul es el numero 2
// Amarillo es el numero 3
// Verde es el numero 4

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var contenedorDiv = document.querySelector('.contenedor');
var estadoDiv = document.querySelector('.estado');
var tiempoDiv = estadoDiv.children[1];
var tituloTiempo = tiempoDiv.querySelector('h2');

var modal = document.querySelector('.modal');
var perdisteDiv = document.createElement('div');


var puntajeDiv = estadoDiv.children[0];
var tituloPuntaje = puntajeDiv.querySelector('h2');
console.log(tituloTiempo.textContent)



var secuenciaPrincipal = [];
var secuenciaJugador = [];
var nombreJugador;
var nombre= false;
var nivel = 0;
var puntaje= 0;
var contador = 0;
var estado = false;
var nuevoJuego = true;
var tiempo = 3;
var tiempoAcumulado = 3;
var temporizador;
var reset;
var timeEnableplay= 0;
var tiempoUtilizado = 0;

function restablecerVariables(){
  perdisteDiv.remove();
  tituloPuntaje.textContent = "Nivel: 0";
  secuenciaPrincipal = [];
  secuenciaJugador = [];
  puntaje = 0;
  nivel= 0;
  contador = 0;
  estado = false;
  nuevoJuejo = false;
  tiempo = 3;
  tiempoAcumulado = 3;
  tiempoUtilizado = 0;

  red.style.backgroundColor = 'rgb(100, 0, 0)';
  red.style.border = '8px solid rgb(48, 46, 46)';

  blue.style.backgroundColor = 'rgb(0, 0, 100)';
  blue.style.border = '8px solid rgb(48, 46, 46)';

  yellow.style.backgroundColor = 'rgb(204, 204, 0)';
  yellow.style.border = '8px solid rgb(48, 46, 46)';

  green.style.backgroundColor = 'rgb(0, 80, 0)';
  green.style.border = '8px solid rgb(48, 46, 46)';
  
}




function obtenerNumeroAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  return numeroAleatorio;
}



// Eventos 
var buttonPlay = document.getElementById("play");
buttonPlay.addEventListener('click', start);

buttonCloseModal.addEventListener('click', closeModal);

red.addEventListener('click', checkSecuencia);
blue.addEventListener('click', checkSecuencia);
yellow.addEventListener('click', checkSecuencia);
green.addEventListener('click', checkSecuencia);


function start(e){
  // Para evitar que recargue la pagina
  e.preventDefault();

  if(nombre){
    if(nuevoJuego){
      restablecerVariables();
    }
    buttonPlay.style.display = "none";
    play();
    
  }else{
    var spanNameNo = document.createElement(`span`);
    spanNameNo.textContent = '❌ Debe escribir un nombre de al menos 3 caracteres';
    spanNameNo.style.color = `red`;
    spanNameNo.style.fontSize = `11px`;
    spanNameNo.style.display = `block`;
    divName.insertBefore(spanNameNo, divName.children[2]);
    nombre = false;
  }
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



/* function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */


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
      reset = setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 2:
      // Código a ejecutar si opcion es igual a 2
      blue.style.backgroundColor = "blue";
      blue.style.border = '4px solid white';
      //await delay(500);
      reset = setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 3:
      // Código a ejecutar si opcion es igual a 3
      yellow.style.backgroundColor = 'rgb(255, 255, 0)';
      yellow.style.border = '4px solid white';
      //await delay(500);
      reset = setTimeout(function(){
        restablecer()
      }, 1000);
      //setTimeout(restablecer(), 1000);
      break;

    case 4:
      green.style.backgroundColor = 'rgb(0, 255, 0)';
      green.style.border = '4px solid white';
      //await delay(500);
      reset = setTimeout(function(){
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
    red.style.border = '8px solid rgb(48, 46, 46)';
    
    blue.style.backgroundColor = 'rgb(0, 0, 100)';
    blue.style.border = '8px solid rgb(48, 46, 46)';
    
    yellow.style.backgroundColor = 'rgb(204, 204, 0)';
    yellow.style.border = '8px solid rgb(48, 46, 46)';
    
    green.style.backgroundColor = 'rgb(0, 80, 0)';
    green.style.border = '8px solid rgb(48, 46, 46)';
  
  


  
}

function checkSecuencia(e){
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
        //await delay(100);
        setTimeout(function(){
          restablecer();
        },100);
/*         red.style.backgroundColor = 'rgb(100, 0, 0)';
        red.style.border = '4px solid rgb(48, 46, 46)'; */
        
      };
      if(divId == "blue"){
        color = 2;
        blue.style.backgroundColor = "blue";
        blue.style.border = '4px solid white';
        //await delay(100);
        setTimeout(function(){
          restablecer();
        },100);
/*         blue.style.backgroundColor = 'rgb(0, 0, 100)';
        blue.style.border = '4px solid rgb(48, 46, 46)'; */

      };
      if(divId == "yellow"){
        color = 3;
        yellow.style.backgroundColor = 'rgb(255, 255, 0)';
        yellow.style.border = '4px solid white';
        //await delay(100);
        setTimeout(function(){
          restablecer();
        },100);
/*         yellow.style.backgroundColor = 'rgb(204, 204, 0)';
        yellow.style.border = '4px solid rgb(48, 46, 46)'; */
      };
      if(divId == "green"){
        color = 4;
        green.style.backgroundColor = 'rgb(0, 255, 0)';
        green.style.border = '4px solid white';
        //await delay(100);
        setTimeout(function(){
          restablecer();
        },100);
/*         green.style.backgroundColor = 'rgb(0, 80, 0)';
        green.style.border = '4px solid rgb(48, 46, 46)'; */
      }; 
  

      if(secuenciaPrincipal[contador] != color){
        perdiste();
      }
      else{
        contador++;
    
        if (contador == secuenciaPrincipal.length){
          tiempoUtilizado = tiempoUtilizado + (tiempo - timeEnableplay);
          nivel +=1;
          estado = false;
          clearTimeout(temporizador);
          //await delay(1000);
          tituloPuntaje.textContent = "Nivel: " + contador;
          tiempo += 0.5;
          tiempoAcumulado += tiempo;
          setTimeout(function(){
            play();
          },1000);
          
        }

      }
  
    }

}


function perdiste(){
  clearInterval(temporizador);
  clearTimeout(reset);
  puntaje = nivel - (tiempoAcumulado - tiempoUtilizado)/100;
  var fechaActual = new Date().toISOString().slice(0, 10);

  var scoreJugador ={
    fecha: fechaActual,
    jugador: nombreJugador,
    nivel: nivel,
    score: puntaje
  };

  // Comprobamos si el puntaje realizado debe ingresar al top ten y lo colocamos en el lugar del ranking correspondiente
  for(var i = 0; i < 10; i++){
    top10ObjScore = top10[i];

    if(top10ObjScore.score < puntaje){
      var bajaUnaPosicion = top10ObjScore;
      top10[i] = scoreJugador;
  
      var posicion = i + 1;
      while(posicion < 10 ){
        var objReemplazado = top10[posicion];
        top10[posicion] = bajaUnaPosicion;
  
        bajaUnaPosicion = objReemplazado;
        posicion ++;
      }

      break;
    }
  }

  setTimeout(function(){
    console.log("Perdiste")
    red.style.backgroundColor = "black";
    blue.style.backgroundColor = "black";
    yellow.style.backgroundColor = "black";
    green.style.backgroundColor = "black";
  },200);

  
  estado = false;
  nuevoJuego = true;
  modal.style.display = "block";
  score.textContent = "Score: " + puntaje.toFixed(2);
  actualizarTop10();
  
}

// Funcion para obtener el top 10 de puntajes desde el localStorage
function getTop10(){
  /* localStorage.clear(); */

  if(localStorage.length > 0){

    for(var i = 0; i < 10; i++){
      var key = " " + i
      var scoreJSON = localStorage.getItem(key);
      var objScore = JSON.parse(scoreJSON);
      console.log(objScore);

      top10.push(objScore);
    }


  }else{

    for(var i = 0; i < 10; i++){
      var key = " " + i;

      var scoreJugador ={
        fecha: "0000/00/00",
        jugador: "Desconocido",
        nivel: 0,
        score: 0
      };

      var scoreJSON = JSON.stringify(scoreJugador);
      localStorage.setItem(key, scoreJSON);
      
      top10.push(scoreJugador);

    }

  }
  console.log(top10);

}

function actualizarTop10(){
  console.log(top10);

  for(var i = 0; i < 10; i++){
    var score = top10[i];
    var key = " " + i;
    var scoreJSON = JSON.stringify(score);

    localStorage.setItem(key, scoreJSON);

  }
}




function tiempoDisponible(){

  timeEnableplay = tiempo;
  var tiempoDisponibleWhile = tiempo;
  var segundos = 1000;
  tituloTiempo.textContent = 'Tiempo: ' + timeEnableplay;

  setTimeout(function(){

    temporizador;

  },1000);

  temporizador = setInterval(function(){
    timeEnableplay = timeEnableplay - 0.1;
    tituloTiempo.textContent = 'Tiempo: ' + timeEnableplay.toFixed(2);
    console.log("set time while")
    if(timeEnableplay <= 0 && estado){
      tituloTiempo.textContent = 'Tiempo: 0';
      tiempoUtilizado = tiempoUtilizado + (tiempo - timeEnableplay);
      perdiste();
      //clearInterval(temporizador);
      return;
    }
  }, 100);


}














// Validaciones

// Validar el nombre
var inputName = document.getElementById('nombre');
var divName = inputName.parentNode;
console.log(divName);

// Eventos
inputName.addEventListener('blur', validarNombre)
inputName.addEventListener('focus', limpiarMensaje)

function validarNombre(e){
  var textoIngresado = e.target.value;
  if(textoIngresado != ""){
    
    if(textoIngresado.length < 3){
      
      var spanNameNo = document.createElement(`span`);
    
      spanNameNo.textContent = '❌ Debe escribir un nombre de al menos 3 caracteres'
      spanNameNo.style.color = `red`;
      spanNameNo.style.fontSize = `11px`;
      spanNameNo.style.display = `block`;
      divName.insertBefore(spanNameNo, divName.children[2]);
      nombre = false;
    }
    else{
  
      nombreJugador = inputName.value;
      var spanNameOk = document.createElement(`span`);
      spanNameOk.textContent = `✅ Perfecto, a jugar!`;
      spanNameOk.style.color = `green`;
      spanNameOk.style.fontSize = `12px`;
      spanNameOk.style.display = `block`;
      divName.insertBefore(spanNameOk, divName.children[2]);
      nombre = true;
    }

  }
  else{
    nombre = false;
  }
}


// Funcion para limpiar todos los mensajes de validación una vez el usuario vuelve a editar el input

function limpiarMensaje(e){
  var elementEvent = e.target;
  var divParenElement = elementEvent.parentNode; 

  var span = divParenElement.children[2];
  if(span.tagName === `SPAN`){

    divParenElement.removeChild(span);
  }

}



function closeModal(){
  buttonCloseModal.style.display = "none";
  buttonPlay.style.display = "block";
  buttonPlay.textContent = "Reiniciar";
}






