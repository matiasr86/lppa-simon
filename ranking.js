// Obtenemos una referencia a la tabla
var table = document.getElementById("my-table");
var bodyTable = document.getElementById("body");
var top10 = [];
getTop10();

// Funcion para obtener el top 10 de puntajes desde el localStorage
function getTop10() {
  for (var i = 0; i < 10; i++) {
    var key = " " + i;
    var scoreJSON = localStorage.getItem(key);
    var objScore = JSON.parse(scoreJSON);
    top10.push(objScore);
    addRow(objScore.date, objScore.player, objScore.level, objScore.score);
  }
}

// Creamos una función para agregar una fila a la tabla
function addRow(fecha, jugador, nivel, score) {
  var row = document.createElement("tr");

  var celda1 = document.createElement("td");
  celda1.textContent = fecha;
  celda1.style.textAlign = "center";
  row.appendChild(celda1);

  var celda2 = document.createElement("td");
  celda2.textContent = jugador;
  row.appendChild(celda2);

  var celda3 = document.createElement("td");
  celda3.textContent = nivel;
  celda3.style.textAlign = "center";
  row.appendChild(celda3);

  var celda4 = document.createElement("td");
  celda4.textContent = score.toFixed(2);
  celda4.style.textAlign = "center";

  row.appendChild(celda4);
  bodyTable.appendChild(row);
}
