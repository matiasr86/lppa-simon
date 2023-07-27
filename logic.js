var flotanteDiv = document.querySelector('.flotante');
console.log(flotanteDiv);
flotanteDiv.style.cursor = "default";

var reinicioLink = flotanteDiv.firstElementChild;




// Rojo es el numero 1
// Azul es el numero 2
// Amarillo es el numero 3
// Verde es el numero 4

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var contenedorDiv = document.querySelector('.contenedor');
var playDiv = contenedorDiv.children[0];
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
  reinicioLink.textContent = "";
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

reinicioLink.addEventListener('click', start);

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


  if(nombre){
    buttonPlay.disabled = true;
    play();

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
  //agregarFila(fechaActual, nombreJugador, puntaje);
  reinicioLink.textContent = "Reiniciar";

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

  perdisteDiv = document.createElement('div');
  


  perdisteDiv.id = 'perdiste-div';
  perdisteDiv.style.backgroundColor = '#ff5252';
  perdisteDiv.style.padding = '10px';
  perdisteDiv.style.textAlign = 'center';
  perdisteDiv.style.marginTop = '5px';
  perdisteDiv.style.marginBottom = '5px';
  perdisteDiv.style.width = '350px';
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
  contenedorDiv.insertBefore(perdisteDiv, playDiv); 
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


// Cargar Ranking

// Obtenemos una referencia a la tabla
var table = document.getElementById("my-table");

// Creamos una función para agregar una fila a la tabla
function agregarFila(fecha, jugador, puntaje) {
  var row = document.createElement("tr");

  var celda1 = document.createElement("td");
  celda1.textContent = fecha;
  celda1.style.textAlign = "center"
  row.appendChild(celda1);

  var celda2 = document.createElement("td");
  celda2.textContent = jugador;
  row.appendChild(celda2);

  var celda3 = document.createElement("td");
  celda3.textContent = puntaje.toFixed(2);
  celda3.style.textAlign = "center"
  row.appendChild(celda3);

  table.querySelector("tbody").appendChild(row);
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
    
    if(textoIngresado.length < 7 || textoIngresado.indexOf(" ") == -1 ){
      
      var spanNameNo = document.createElement(`span`);
    
      spanNameNo.textContent = '❌'
      spanNameNo.style.color = `red`;
      spanNameNo.style.fontSize = `11px`;
      spanNameNo.style.display = `block`;
      divName.insertBefore(spanNameNo, divName.children[2]);
      nombre = false;
    }
    else{
  
      nombreJugador = inputName.value;
      var spanNameOk = document.createElement(`span`);
      spanNameOk.textContent = `✅Ok`;
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






