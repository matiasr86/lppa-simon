// Obtenemos una referencia a la tabla
var table = document.getElementById("my-table");
var bodyTable = document.getElementById("body");
console.log(table)
var top10 = [];
getTop10();


// Funcion para obtener el top 10 de puntajes desde el localStorage
function getTop10(){
  
  for(var i = 0; i < 10; i++){
    var key = " " + i;
    var scoreJSON = localStorage.getItem(key);
    var objScore = JSON.parse(scoreJSON);
    console.log(objScore)
    top10.push(objScore);
  
    agregarFila(objScore.fecha, objScore.jugador, objScore.nivel, objScore.score);
  }
/*   console.log(top10);
  agregarFila("fecha", "Matias", 5, 5.98); */
}



// Cargar Ranking


// Creamos una función para agregar una fila a la tabla
function agregarFila(fecha, jugador, nivel,  score) {
  var row = document.createElement("tr");

  var celda1 = document.createElement("td");
  celda1.textContent = fecha;
  celda1.style.textAlign = "center"
  row.appendChild(celda1);

  var celda2 = document.createElement("td");
  celda2.textContent = jugador;
  row.appendChild(celda2);

  var celda3 = document.createElement("td");
  celda3.textContent = nivel.toFixed(2);
  celda3.style.textAlign = "center"
  row.appendChild(celda3);

  var celda4 = document.createElement("td");
  celda4.textContent = score.toFixed(2);
  celda4.style.textAlign = "center"
  row.appendChild(celda4);
  console.log(bodyTable);
  bodyTable.appendChild(row);
}
