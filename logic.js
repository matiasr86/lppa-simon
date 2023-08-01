// Declaramos el array donde vamos a guardar el top 10 y traemos del localStorage el top 10
var top10 = [];
getTop10();

// Guardamos en variables los elementos del DOM que vamos a manipular
var flotanteDiv = document.querySelector(".flotante");
flotanteDiv.style.cursor = "default";

var buttonCloseModal = document.getElementById("close-modal");
var scoreElement = document.getElementById("score");

// Rojo es el numero 1
// Azul es el numero 2
// Amarillo es el numero 3
// Verde es el numero 4

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var stateDiv = document.querySelector(".state");
var timeDiv = stateDiv.children[1];
var titleTime = timeDiv.querySelector("h2");
var modal = document.querySelector(".modal");

var levelDiv = stateDiv.children[0];
var titleLevel = levelDiv.querySelector("h2");

// Eventos
var buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", start);

buttonCloseModal.addEventListener("click", closeModal);

red.addEventListener("click", checkSecuencia);
blue.addEventListener("click", checkSecuencia);
yellow.addEventListener("click", checkSecuencia);
green.addEventListener("click", checkSecuencia);

// Inicializamos las variables globales que necesitaremos

var sequenceMain = [];
var sequencePlayer = [];
var countColorOk = 0;
var namePlayer;
var nameVar = false;
var level = 0;
var score = 0;
var count = 0;
var state = false;
var newGame = true;
var time = 3;
var timeAcumulado = 3;
var temp;
var reset;
var timeEnableplay = 0;
var timeUtilizado = 0;

// Funcion para obtener el top 10 de puntajes desde el localStorage
function getTop10() {
  /* localStorage.clear(); */
  if (localStorage.length > 0) {
    for (var i = 0; i < 10; i++) {
      var key = " " + i;
      var scoreJSON = localStorage.getItem(key);
      var objScore = JSON.parse(scoreJSON);
      top10.push(objScore);
    }
  } else {
    for (var i = 0; i < 10; i++) {
      var key = " " + i;
      var scorePlayer = {
        date: "0000-00-00",
        player: "Sin Registro",
        level: 0,
        score: 0,
      };
      var scoreJSON = JSON.stringify(scorePlayer);
      localStorage.setItem(key, scoreJSON);
      top10.push(scorePlayer);
    }
  }
}

// Iniciamos el juego
function start(e) {
  // Para evitar que recargue la pagina
  e.preventDefault();
  if (nameVar) {
    if (newGame) {
      resetVars();
    }
    buttonPlay.style.display = "none";
    play();
  } else {
    // si el jugador no coloca el nombre
    var spanNameNo = document.createElement(`span`);
    spanNameNo.textContent =
      "❌ Debe escribir un nombre de al menos 3 caracteres";
    spanNameNo.style.color = `red`;
    spanNameNo.style.fontSize = `11px`;
    spanNameNo.style.display = `block`;
    divName.insertBefore(spanNameNo, divName.children[2]);
    nameVar = false;
  }
}

// Funcion para resetear los valores de las variables al reiniciar el juego
function resetVars() {
  titleLevel.textContent = "Nivel: 0";
  sequenceMain = [];
  sequencePlayer = [];
  countColorOk = 0;
  score = 0;
  level = 0;
  count = 0;
  state = false;
  newGame = false;
  time = 3;
  timeAcumulado = 3;
  timeUtilizado = 0;

  red.style.backgroundColor = "rgb(100, 0, 0)";
  red.style.border = "8px solid rgb(48, 46, 46)";
  blue.style.backgroundColor = "rgb(0, 0, 100)";
  blue.style.border = "8px solid rgb(48, 46, 46)";
  yellow.style.backgroundColor = "rgb(204, 204, 0)";
  yellow.style.border = "8px solid rgb(48, 46, 46)";
  green.style.backgroundColor = "rgb(0, 80, 0)";
  green.style.border = "8px solid rgb(48, 46, 46)";
}

// Funcion para optener un valor random para incorporar a la secuencia principal
function getNumberRandom() {
  var numberRandom = Math.floor(Math.random() * 4) + 1;
  return numberRandom;
}

// Iniciamos el juego
function play() {
  titleTime.textContent = "Recordar...";
  var numRan = getNumberRandom();
  sequenceMain.push(numRan);

  // Ejecutamos la secuencia
  for (var i = 0; i <= sequenceMain.length; i++) {
    var wait = i * 1500;
    execute(sequenceMain[i], wait);
    if (i == sequenceMain.length) {
    }
  }
  count = 0;
  setTimeout(function () {
    timeAvailable();
    state = true;
  }, wait);
}

// Temporizador
function timeAvailable() {
  timeEnableplay = time;
  titleTime.textContent = "Tiempo: " + timeEnableplay;
  setTimeout(function () {
    temp;
  }, 1000);
  temp = setInterval(function () {
    timeEnableplay = timeEnableplay - 0.1;
    titleTime.textContent = "Tiempo: " + timeEnableplay.toFixed(2);
    if (timeEnableplay <= 0 && state) {
      titleTime.textContent = "Tiempo: 0";
      timeUtilizado = timeUtilizado + (time - timeEnableplay);
      youLose();
      return;
    }
  }, 100);
}

// Se invoca a la ejecucion de la secuencia
function execute(num, seg) {
  setTimeout(function () {
    changeColor(num);
  }, seg);
}

// Funcion que cambia la intensidad de los colores
function changeColor(num) {
  switch (num) {
    case 1:
      // Código a ejecutar si opcion es igual a 1
      red.style.backgroundColor = "rgb(255, 0, 0)";
      red.style.border = "4px solid rgb(255, 255, 255)";
      resetTime = setTimeout(function () {
        reset();
      }, 1000);
      break;
    case 2:
      // Código a ejecutar si opcion es igual a 2
      blue.style.backgroundColor = "rgb(0, 50, 255)";
      blue.style.border = "4px solid rgb(255, 255, 255)";
      resetTime = setTimeout(function () {
        reset();
      }, 1000);
      break;
    case 3:
      // Código a ejecutar si opcion es igual a 3
      yellow.style.backgroundColor = "rgb(255, 255, 0)";
      yellow.style.border = "4px solid rgb(255, 255, 255)";
      resetTime = setTimeout(function () {
        reset();
      }, 1000);
      break;
    case 4:
      // Código a ejecutar si opcion es igual a 4
      green.style.backgroundColor = "rgb(0, 255, 0)";
      green.style.border = "4px solid rgb(255, 255, 255)";
      resetTime = setTimeout(function () {
        reset();
      }, 1000);
      break;
  }
}

// Funcion para reestablecer los colores originales
function reset() {
  red.style.backgroundColor = "rgb(100, 0, 0)";
  red.style.border = "8px solid rgb(48, 46, 46)";
  blue.style.backgroundColor = "rgb(0, 0, 100)";
  blue.style.border = "8px solid rgb(48, 46, 46)";
  yellow.style.backgroundColor = "rgb(204, 204, 0)";
  yellow.style.border = "8px solid rgb(48, 46, 46)";
  green.style.backgroundColor = "rgb(0, 80, 0)";
  green.style.border = "8px solid rgb(48, 46, 46)";
}

// Funcion para chequear si la secuencia que el jugador va ingresando es correcta
function checkSecuencia(e) {
  // Para evitar que recargue la pagina
  e.preventDefault();
  if (!state) {
  } else {
    var divId = e.target.id;
    var color = 0;
    if (divId == "red") {
      color = 1;
      red.style.backgroundColor = "rgb(255, 0, 0)";
      red.style.border = "4px solid rgb(255, 255, 255)";
      setTimeout(function () {
        reset();
      }, 100);
    }
    if (divId == "blue") {
      color = 2;
      blue.style.backgroundColor = "rgb(0, 50, 255)";
      blue.style.border = "4px solid rgb(255, 255, 255)";
      setTimeout(function () {
        reset();
      }, 100);
    }
    if (divId == "yellow") {
      color = 3;
      yellow.style.backgroundColor = "rgb(255, 255, 0)";
      yellow.style.border = "4px solid rgb(255, 255, 255)";
      setTimeout(function () {
        reset();
      }, 100);
    }
    if (divId == "green") {
      color = 4;
      green.style.backgroundColor = "rgb(0, 255, 0)";
      green.style.border = "4px solid rgb(255, 255, 255)";
      setTimeout(function () {
        reset();
      }, 100);
    }

    if (sequenceMain[count] != color) {
      youLose();
    } else {
      count++;
      countColorOk++;
      if (count == sequenceMain.length) {
        timeUtilizado = timeUtilizado + (time - timeEnableplay);
        level += 1;
        state = false;
        clearTimeout(temp);
        titleLevel.textContent = "Nivel: " + level;
        time += 0.5;
        timeAcumulado += time;
        setTimeout(function () {
          play();
        }, 1000);
      }
    }
  }
}

function youLose() {
  clearInterval(temp);
  clearTimeout(reset);
  score = countColorOk - (timeAcumulado - timeUtilizado) / 100;
  var dateNow = new Date().toISOString().slice(0, 10);

  var scoreJugador = {
    date: dateNow,
    player: namePlayer,
    level: level,
    score: score,
  };

  // Comprobamos si el puntaje realizado debe ingresar al top ten y lo colocamos en el lugar del ranking correspondiente
  for (var i = 0; i < 10; i++) {
    top10ObjScore = top10[i];

    if (top10ObjScore.score < score) {
      var bajaUnaPosicion = top10ObjScore;
      top10[i] = scoreJugador;

      var posicion = i + 1;
      while (posicion < 10) {
        var objReemplazado = top10[posicion];
        top10[posicion] = bajaUnaPosicion;

        bajaUnaPosicion = objReemplazado;
        posicion++;
      }

      break;
    }
  }

  setTimeout(function () {
    red.style.backgroundColor = "rgb(0, 0, 0)";
    blue.style.backgroundColor = "rgb(0, 0, 0)";
    yellow.style.backgroundColor = "rgb(0, 0, 0)";
    green.style.backgroundColor = "rgb(0, 0, 0)";
  }, 200);

  state = false;
  newGame = true;
  modal.style.display = "block";
  scoreElement.textContent = "Score: " + score.toFixed(2);

  // Actualizamos el localStorage
  updateTop10();
}

// Funcion para actualizar el localStorage con los mejores 10 score
function updateTop10() {
  for (var i = 0; i < 10; i++) {
    var score = top10[i];
    var key = " " + i;
    var scoreJSON = JSON.stringify(score);
    localStorage.setItem(key, scoreJSON);
  }
}

function closeModal() {
  buttonCloseModal.style.display = "none";
  buttonPlay.style.display = "block";
  buttonPlay.textContent = "Reiniciar";
}

// Validaciones

// Validar el nombre
var inputName = document.getElementById("nombre");
var divName = inputName.parentNode;

// Eventos
inputName.addEventListener("blur", validName);
inputName.addEventListener("focus", clearMessage);

function validName(e) {
  var textoIngresado = e.target.value;
  if (textoIngresado != "") {
    if (textoIngresado.length < 3) {
      var spanNameNo = document.createElement(`span`);
      spanNameNo.textContent =
        "❌ Debe escribir un nombre de al menos 3 caracteres";
      spanNameNo.style.color = `red`;
      spanNameNo.style.fontSize = `11px`;
      spanNameNo.style.display = `block`;
      divName.insertBefore(spanNameNo, divName.children[2]);
      nameVar = false;
    } else {
      namePlayer = inputName.value;
      var spanNameOk = document.createElement("span");
      spanNameOk.textContent = "✅ Perfecto, a jugar!";
      spanNameOk.style.color = "green";
      spanNameOk.style.fontSize = "12px";
      spanNameOk.style.display = "block";
      divName.insertBefore(spanNameOk, divName.children[2]);
      nameVar = true;
    }
  } else {
    nameVar = false;
  }
}

// Funcion para limpiar todos los mensajes de validación una vez el usuario vuelve a editar el input

function clearMessage(e) {
  var elementEvent = e.target;
  var divParenElement = elementEvent.parentNode;
  var span = divParenElement.children[2];
  if (span.tagName === `SPAN`) {
    divParenElement.removeChild(span);
  }
}
